<template>
  <div id="detail">
	  <detail-navBar @titleClick="titleClick" ref="nav"/>
		<scroll class="content" ref="scroll" :probeType=3 @scrollListener="deScrollListener">
			<detail-swiper :topImages="tImages"/>
			<detail-goods :goods="goods" />
			<detail-shop-info :shop="shop"/>
			<detail-goods-info :detailInfo="goodsInfo" @loadImgEvent="detailImgLoad"/>
			<detail-params ref="params" :paramInfo="goodsParams"/>
			<detail-comment ref="comment" :comment="goodsComment" :iid="iid"/>
			<goods-list  ref="list" :goods="goodsRecommend"/>
		</scroll>
		<backTop @click.native="backClick" v-show="isBackTopShow" />
		<detail-bottom-bar @addToCart="putItemToCart" />
		<toast :message="toastMessage" :isShow="isToastShow"></toast>
  </div>
</template>

<script>
	import toast from 'components/common/toast/Toast.vue'
	import detailNavBar    from './childComp/detailNavBar.vue'
	import detailSwiper    from './childComp/detailSwiper.vue'
	import detailGoods     from './childComp/DetailGoods.vue'
	import detailShopInfo  from './childComp/DetailShopInfo.vue'
	import detailGoodsInfo from './childComp/DetailGoodsInfo.vue'
	import detailParams    from './childComp/DetailParams.vue'
	import detailComment   from './childComp/DetailComment.vue'
	import scroll          from 'components/common/better-scroll/Scroll.vue'
	import goodsList       from 'components/content/Goods/GoodsList.vue'
	import detailBottomBar from './childComp/DetailBottomBar.vue'
	import {getDetailData,Goods,Shop,GoodsParam,getRecommendData} from 'network/detail-req.js'
	import {deBounce} from 'common/utils.js'
	import {imgMixinListener,backTopMixin} from 'common/mixin.js'
	import {mapActions} from 'vuex'
  export default {
    name: 'Detail',
		data(){
			return{
				iid:null,
				tImages:[],
				goods:{},
				shop:{},
				goodsInfo:{},
				goodsParams:{},
				goodsComment:{},
				goodsRecommend:[],
				themeTopY:[0,0,0,0],
				positionY:0,
				currentIndex:0,
				toastMessage:'',
				isToastShow:false
			}
		},
		components:{
			toast,
			detailNavBar,
			detailSwiper,
			detailGoods,
			detailShopInfo,
			detailGoodsInfo,
			detailParams,
			detailComment,
			scroll,
			goodsList,
			detailBottomBar
		},
		mixins:[imgMixinListener,backTopMixin],
		created() {
			//取出商品的iid
			this.iid=this.$route.query.iid
			//获取详情数据
			getDetailData(this.iid).then(res=>{
				if(res){
					this.tImages.push(...res.result.itemInfo.topImages) //能把一个数组中的所有成员解构出去加到另一数组的方法
					const result=res.result
					//获取商品信息
					this.goods = new Goods(
					  result.itemInfo,
					  result.columns,
					  result.shopInfo.services
					);
					
					//获取商铺信息
					this.shop = new Shop(result.shopInfo);
					
					//获取商品详情
					this.goodsInfo=result.detailInfo		
					this.goodsParams=new GoodsParam (result.itemParams.info,result.itemParams.rule)
					
					//获取评论信息
					if(result.rate.cRate!=0){ //currentRate当前评论数
						this.goodsComment=result.rate.list[0]
					}
					
				}
			})
			//获取推荐数据
			getRecommendData().then(res=>{
				if(res.data){
					this.goodsRecommend=res.data.list
				}
			})
		},
		mounted() {
			//该内容因为跟首页一样所以用混入实现
			// const refresh=deBounce(this.$refs.scroll&&this.$refs.scroll.refresh,50)
			// this.itemImgListener=()=>{
			// 	refresh()
			// }
			// this.$bus.$on('imageLoad',this.itemImgListener)
		
		},
		destroyed() {
			//取消监听最主要是取消监听后执行的函数
			this.$bus.$off('imageLoad',this.itemImgListener)
		},
		methods:{
			...mapActions(['addCart']),
			//商品详情图片加载完的钩子
			detailImgLoad(){
				this.$refs.scroll&&this.$refs.scroll.refresh();
				
				this.themeTopY=[]
				this.themeTopY.push(0)
				this.themeTopY.push(this.$refs.params.$el.offsetTop)
				this.themeTopY.push(this.$refs.comment.$el.offsetTop)
				this.themeTopY.push(this.$refs.list.$el.offsetTop)
				this.themeTopY.push(Number.MAX_VALUE)
			},

			//navbar上title的点击钩子
			titleClick(index){
				// console.log(index)
				if(this.$refs.scroll){
					this.$refs.scroll.scrollTo(0,-this.themeTopY[index],0)
				}
			},
			
			//detail界面滚动的钩子
			deScrollListener(position){
				this.positionY=-position.y
				// console.log(this.positionY)
				let posY=this.positionY
				for(let i=0;i<this.themeTopY.length-1;i++){
					i=parseInt(i)//i=i*1 如果是像let i in this.themeTopY这种写法的i一定是字符型，要将它转为数字型
					// if(this.currentIndex!=i&&this.themeTopY[i]<=posY&&posY<this.themeTopY[i+1]){ 
					// 	this.currentIndex=i
					// }
					// if(this.currentIndex!=i&&i==this.themeTopY.length-1&&posY>=this.themeTopY[i]){
					// 	this.currentIndex=i
					// }
					
					//上面的代码也可以，就是if里面的条件有点多，，每次都要判断这么多怕性能不好
					//所以优化完后，是加了个最大值在数组后面，让最后一个高度(推荐高度)能和最大值之间有个区间供判断。
					//虽然内存上多了一部分Number内容，但这种以空间换时间还是值得的
					if(this.currentIndex!=i&&this.themeTopY[i]<=posY&&posY<this.themeTopY[i+1]){
						this.currentIndex=i
					}
				}
				this.$refs.nav.currentIndex=this.currentIndex		
			},
			//将商品放入购物车的钩子
			putItemToCart(){
				const product = {
				  iid: this.iid,
				  desc: this.goods.desc,
				  realPrice: this.goods.lowNowPrice,
				  title: this.goods.title,
				  img: this.goods.topImages[0]
				};
				//而且像mapGetters一样能从actions里把addCart映射过来(mapActions) 省点代码
				//单纯调用actions里的addCart不能让我们知道他已经调用完了，我们要知道他已经dispatch出去的话就要在actions中返回promise
				this.addCart(product).then(res=>{
					// console.log(res)
					// this.toastMessage=res  这些是利用promise知道addCart中的commit完成后回调的函数并且能拿到成功时携带的信息res
					// this.isToastShow=true  一开始这些是普通的toast封装
					             //           **   而如今我们是利用 Vue.use() 让项目的main.js在解析时就触发install事件
																		// 而install事件中携带 创造toast组件并为其实现手动挂载后将该组件设为全局组件(对象) (prototype)
																		// 这样项目的每个组件中都能调用该toast对象 实现最便利
																		// 将一个需求很高的组件--->全局对象--->其他组件需要时调用该全局对象内的方法api即可
					// setTimeout(()=>{
					// 	this.isToastShow=false
					// 	this.toastMessage=''
					// },2000)
					this.$toast.show(res,2000)
				})
				// this.$store.dispatch('addCart',product).then(res=>{
				// 	console.log(res)
				// })
				
			}
		}
		
  }
</script>

<style scoped>
	#detail{
		background-color: #fff;
		height: 100vh;
		position: relative;
		z-index: 9;
	}
  .content{
		height: calc(100% - 44px - 49px);
		overflow: hidden;
	}
</style>

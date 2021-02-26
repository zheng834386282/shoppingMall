<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
		
		<tabControl :titles="['流行','新款','精选']"
		class="tabControl1"
		@tabClick=homeTabClick
		ref="tabControl1"
		v-show="isTab1Show"
		/>
		
		<scroll class="content" ref="scroll" 
		      :probeType="3" 
					:pullUpLoad='true'
					@scrollListener="scrollListener"
					@pullUp="loadMore"
					>
					
			  	<homeSwiper 
					:banners="banners"
					@swiperImgLoad="swiperImgLoad()"></homeSwiper>
					
					<recommendView :recommends="recommends"></recommendView>
					
					<featureView/>
					
					<tabControl :titles="['流行','新款','精选']" 
					class="tabControl2"
					@tabClick=homeTabClick
					ref="tabControl2" 
					:class={fixed:isTabFixed} />
					
					<goodsList :goods="goodsShow"></goodsList>	
					
		</scroll>
		<backTop @click.native="backClick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'
import tabControl from 'components/content/TabControl/TabControl.vue'
import goodsList from 'components/content/Goods/GoodsList.vue'
import scroll from 'components/common/better-scroll/Scroll.vue'
import backTop from 'components/content/backTop/backTop.vue'

import homeSwiper from 'views/home/childComps/homeSwiper.vue'
import recommendView from 'views/home/childComps/recommendView.vue'
import featureView from 'views/home/childComps/featureView.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home-req.js'
import {deBounce} from 'common/utils.js'
import {imgMixinListener} from 'common/mixin.js'

export default {
  name: 'Home',
	components:{
		navbar,
		tabControl,
		goodsList,
		scroll,
		backTop,
		homeSwiper,
		recommendView,
		featureView
	},
	computed:{
		goodsShow(){
			return this.goods[this.currentType].list
		},
		isBackTopShow(){
			if(this.isMounted)
			{return (-this.$refs.scroll.positionY>1000)}
		}
	},
	data(){
		return {
			banners:[],
			recommends:[],
			goods:{
				'pop':  {page:0,list:[]},
				'new':  {page:0,list:[]},
				'sell': {page:0,list:[]}
			},
			currentType:'pop',
			isMounted:false,
			tabScrollHeight:0,
			isTabFixed:false,
			isTab1Show:false,
			saveY:0,
			itemImgListener:null
		}
	},
	created() {
		this.getHomeMultidata()
		this.getHomeGoods('pop')
		this.getHomeGoods('new')
		this.getHomeGoods('sell')
	},
	mounted() {
		this.isMounted=true
		// //1.解决bs滚动bug:等到图片加载完再refresh重新计算滚动区域高度并注意防抖
		// const refresh=deBounce(this.$refs.scroll&&this.$refs.scroll.refresh,50)
		// //记住上面这个const refresh一定要在钩子之外，不然每次监听到之后还要执行上面一步浪费了时间过了delay之后就会达不到防抖效果
		// this.$bus.$on('imageLoad',refresh)
	},
	activated() {
		this.$refs.scroll.scrollTo(0,this.saveY,0)
		this.$refs.scroll.refresh()
	  // console.log(this.saveY)
	},
	deactivated() {
		//离开时保存离开时的位置
		this.saveY=this.$refs.scroll.positionY
		//离开时取消imageLoad的监听，不然详情页使用goodsItem组件也会发送事件然后在home响应监听
		this.$bus.$off('imageLoad',this.itemImgListener)
	},
  mixins:[imgMixinListener], //首页也能用混入去掉back的相关代码，这里方便展示源码就不删了
	methods:{
		/**
		 * 事件监听相关方法
		 */
		
		//轮播图加载完后的回调
		swiperImgLoad(){
			this.tabScrollHeight=this.$refs.tabControl2.$el.offsetTop//$refs.tabControl后只是拿到组件，拿到组件里面的元素还需要使用$el
		},
		//监听滚动位置,回到顶部也可以放进这里，因为装逼想用ref就没用
		scrollListener(position){
			if(-position.y>this.tabScrollHeight){
				this.isTabFixed=true
				this.isTab1Show=true
			}
			else{
				this.isTab1Show=false
			}
		},
		//监听tabControl中的点击
		homeTabClick(index){
			switch(index){
				case 0:
				this.currentType='pop';
				break;
				case 1:
				this.currentType='new';
				break;
				case 2:
				this.currentType='sell';
			}
			//防止点击时两个tabControl展示内容不一致
			this.$refs.tabControl1.currentIndex=index
			this.$refs.tabControl2.currentIndex=index
		},
		// isShow(){
		// 	return (-this.$refs.scroll.positionY>1000)
		// }, 这种方法可以直接代替计算属性而不必使用isMounted，此处为了记住教训所以用计算属性提醒下
		
		//回到顶部按钮的点击
		backClick(){
			this.$refs.scroll.scrollTo(0,0,50) //给home的scroll子组件定个ref属性就能父访问子组件中的属性了比如data中的scroll对象
		},
		
		loadMore(){
			this.getHomeGoods(this.currentType)
		},
		/**
		 * 网络请求相关方法
		 */
		getHomeMultidata(){
			getHomeMultidata().then(res=>{
				this.banners=res.data.banner.list;
				this.recommends=res.data.recommend.list;
			})
		},
		getHomeGoods(type){
			const page=this.goods[type].page+1
			getHomeGoods(type,page).then(res=>{
				this.goods[type].list.push(...res.data.list) //能把一个数组中的所有成员解构出去加到另一数组的方法
				this.goods[type].page+=1
				this.$refs.scroll.finishPullUp()
				this.$refs.scroll&&this.$refs.scroll.refresh()
			})
		},
		
	}
}
</script>

<style scoped>
  .home-nav {
		background-color: var(--color-tint);
		color: #FFFFFF;
		/* position: fixed;
		left: 0;right: 0;top: 0; */
		z-index: 8;
		font-size: 18px;
	}
	
	#home {
		
		/* height: 100vh; */ /* viewport-height; 因为content calc中的100%是相对home的，如果不写高度home将依靠内容撑高，会非常高*/
		
	}
	.tabControl1{
		position: relative;
		z-index: 8;
		background-color: #FFFFFF;
	}
	.content{
		position: absolute;
		left: 0;right: 0;
		top: 44px;
		bottom: 45.6px;
		overflow: hidden;
	}
	.fixed{
		background-color: #FFFFFF;
		/* position: fixed;
		top: 40px; */
	}
	/* .content {
		height: calc(100% - 90px); /* 这里也可以用定位方式做 */ 
		/* overflow: hidden;
	} */
	
</style>

<template>
  <div id="category_right">
		<tab-control :titles="tabTitle" @tabClick="tabClick1" ref="tabControl1" v-show="isTab1Show" class="tabControl1"/>
			<scroll class="content" ref="scroll" :probeType=3 >
				<div v-for="(item,index) in goodsList" :key="index" class="goodsItem">
						 
							 <a :href="item.link">
								 <img :src="item.image" alt="" @load="imgLoad">
								 <div>{{item.title}}</div>
							 </a>
						 
				</div>
				<tab-control :titles="tabTitle" @tabClick="tabClick2"  class="tabControl2" ref="tabControl2"/>
				<goods-list :goods="detailsGoods"></goods-list>
			</scroll>
  </div>
</template>
<script>
import Scroll from "components/common/better-scroll/Scroll.vue";
import tabControl from 'components/content/TabControl/TabControl.vue'
import goodsList from 'components/content/Goods/GoodsList.vue'
import {deBounce} from 'common/utils.js'
import {getSubcategory,getCategoryDetail} from 'network/category-req.js'
export default {
	components: {
	 Scroll,
	 tabControl,
	 goodsList
	},
  computed:{
		isTab1Show(){
			if(this.isMounted){
				//计算隐藏tabControl显形条件
				if(this.tabControl2Height < (-this.$refs.scroll.positionY) ){
					return true
				}
				else{
					return false
				}
			}
		},
		
	},
  data() {
    return {
      currentKey:3627,
			miniKey:10062603,
			goodsList:[],
			refresh:null,
			timer1:null,
			timer2:null,
			timer3:null,
			tabTitle:['综合', '新品', '销量'],
			detailsGoods:[],
			types:['pop','new','sell'],
			isMounted:false,
			tabControl2Height:0,
    };
  },
  mounted() {
		this.isMounted=true;
		//获取右侧一行两物数据
		getSubcategory(this.currentKey).then(res=>{
			if(res){
				this.goodsList=res.data.list
			}
		})
		//页面加载完先申请第一个li对应的底部推荐商品数据
		getCategoryDetail(10062603).then(res=>{
			if(res){
				this.detailsGoods=res
			}
		})
		//接收底部推荐商品图片加载完发送的事件并添加防抖处理
		this.$bus.$on('cateImgLoad',()=>{
			if(this.timer2) clearTimeout(this.timer2)
			this.timer2=setTimeout(
			  this.$refs.scroll&&this.$refs.scroll.refresh
			,50);
	
		})
		//接收左侧栏的点击事件
		this.$bus.$on('LiTabClick',obj=>{
			let {maitKey,miniWallkey}=obj
			//点击时判断是否点击重复若没有将右侧scroll滑到顶部
			if(this.currentKey!=maitKey) this.$refs.scroll&&this.$refs.scroll.scrollTo(0,0,10)
			
	    this.currentKey=maitKey
	    this.miniKey=miniWallkey
			
			//请求当前点击对应的数据并重新赋值给goodsList
			getSubcategory(this.currentKey).then(res=>{
				if(res){
					this.goodsList=res.data.list
				}
			})
			
			//请求在右侧tabControl下面与左侧每一栏对应的数据
			this.getCategoryDetail(miniWallkey,this.types[0])
			
			//右侧中部的tabControl改回默认index
			this.$refs.tabControl1.currentIndex=0
			this.$refs.tabControl2.currentIndex=0
		})
		
	},
  methods: {
    imgLoad(){
			//图片加载完后让scroll重新计算滚动区域
			if(this.timer1) clearTimeout(this.timer1)
			this.timer1=setTimeout(
				this.$refs.scroll&&this.$refs.scroll.refresh
			,50)
			
			//图片加载完后计算tabControl高度
			if(this.timer3) clearTimeout(this.timer3)
			this.timer3=setTimeout(
			  this.tabControl2Height=this.$refs.tabControl2&&this.$refs.tabControl2.$el.offsetTop
			,50)
			
		},
		//封装获取底部推荐商品数据
		getCategoryDetail(key,type){
			getCategoryDetail(key,type).then(res=>{
				if(res){
					this.detailsGoods=res
				}
			})
		},
		//两个tabControl点击时获取数据且行为统一
		tabClick2(index){
			this.getCategoryDetail(this.miniKey,this.types[index])
			this.$refs.tabControl1.currentIndex=index
		},
		tabClick1(index){
			this.getCategoryDetail(this.miniKey,this.types[index])
			this.$refs.tabControl2.currentIndex=index
		}
  }
  
};
</script>
<style scoped>
  #category_right{
		position: relative;
		height: calc(100vh - 49px - 44px);
	}
	
	.goodsItem{
		display: inline-block;
		width: 35%;
		height: 90px;
		background-color: white;
		font-size: 13px;
		text-align: center;
		margin-top: 15px;
	}
	.goodsItem img {
		height: 60px;
		width: 60px;
		margin-bottom: 5px;
	}
	.content{
		width: 100%;
		/*不用此法因为他无法让tabControl在content底层显示 height: calc(100vh - 49px - 44px); */
		position: absolute;
		top: 0px;
		bottom: 0px;
		overflow: hidden;

		
	}
	.tabControl1{
		background-color: white;
		position: relative;
		z-index: 9;
		/* position: absolute; */
	}
	.fly{
		/* position: fixed; */
	}
	.tabControl2{
		background-color: white;
	}
</style>

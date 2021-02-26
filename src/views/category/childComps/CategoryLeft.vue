<template>
  <div id="category_left">
    <scroll class="content">
		  <li class="li" v-for="(item,index) in result" :key="index" @click="liClick(index)"
			:class="{active:currentIndex==index}">{{item.title}}</li>
		</scroll>
  </div>
</template>
<script>
import Scroll from "components/common/better-scroll/Scroll.vue";
import { getCategory,getCategoryDetail } from 'network/category-req.js'
export default {
  data() {
    return {
      result:[],
			isActive:false,
			currentIndex:0,
			detailsGoodsList:[]
    };
  },
	computed:{
		
	},
  props: {
    
  },
  mounted() {
    getCategory().then(res=>{
			if(res){
				this.result=res.data.category.list
				this.$bus.$emit()
				console.log(this.result)
			}
			
		})
		
  },
  methods: {
    liClick(index){
			this.currentIndex=index
			let maitKey=this.result[index].maitKey
			let miniWallkey=this.result[index].miniWallkey
			let obj={maitKey,miniWallkey}
			this.$bus.$emit('LiTabClick',obj)
			
		}
  },
	components:{
		Scroll
	}
};
</script>
<style scoped>
  .content{
		height: calc(100vh - 49px - 44px);
		overflow: hidden;
		background-color: #f6f6f6;
	}
	.li{
		list-style: none;
		height: 40px;
		background-color: #f6f6f6;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		width: 70px;
		
	}
	.active{
		color: var(--color-high-text);
		background-color: #FFFFFF;
		border-left: 1.5px solid indianred;
	}
</style>

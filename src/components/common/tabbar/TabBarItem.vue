<template>
 
		<div class="tab-bar-item" @click="itemClick()">
			<div :class="{active:isActive}"><slot name="item-font"></slot></div>
			<div :class="{active:isActive}"><slot name="item-text"></slot></div>
		</div>
		
</template>

<script>
export default {
  name: 'TabBarItem',
	computed:{
		isActive(){
			return this.$route.path.indexOf(this.path)!=-1
		}
	},
	props:{
		path:String  //定义path变量 然后在TabBarItem组件标签中直接添加path属性
	},
	methods:{
		itemClick(){
			this.$router.replace(this.path)
		}
	}
}
</script>

<style scoped="scoped">
	/* css和html用别名都加~ */
	@import url("~assets/font/iconfont.css");
	.iconfont{font-size: 24px;}
  .tab-bar-item{flex: 1;text-align: center;}
	.active{color: hotpink;}
</style>

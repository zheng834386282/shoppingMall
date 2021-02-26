<template>
  <div id="detail-moreComments">
		<nav-bar id="nav-bar">
			<div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
			<div slot="center" class="nav-title"><h2>更多评论</h2></div>
		</nav-bar>
		<h2>{{goodsId}}</h2>
  </div>
</template>

<script>
	import navBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: 'DetailMoreComments',
		components:{
			navBar
		},
		props:{
			goodsId:{
				type:String,
				default(){
					return ''
				}
			}
		},
		methods:{
			backClick(){
				this.$router.back()
			}
		}
		
  }
</script>

<style scoped>
  #detail-moreComments{
		height: 100vh;
		position:relative;
		z-index: 9;
		background-color: #fff;
	}
	#nav-bar{
		background-color: #fff;
		position: relative;
		z-index: 9;
	}
	.back {
		margin-top: 6px;
		margin-left: 8px;
	}
	.nav-title{
		margin-right: 33px;
	}
</style>

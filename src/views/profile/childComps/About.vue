<template>
  <div id="about">
    <div>
			<img src="~assets/img/profile/cart.svg" alt=""><span>我的购物车</span>
		</div>
		<div>
			<img src="~assets/img/profile/shopping.svg" alt=""><span>下载蘑菇街APP</span>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
  #about{
		margin-top: 15px;
		width: 100%;
	}
	#about div{
		height: 47px;
		background-color: white;
		margin-top: 4px;
		position: relative;
	}
	#about div span{
		position: absolute;
		top: 15px;
	}
	#about div img{
		width: 25px;
		height: 35px;
		display: inline-block;
		margin-top: 5px;
		margin-left: 8px;
		margin-right: 7px;
	}
</style>

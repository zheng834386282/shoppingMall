<template>
  <div id="category_navbar">
    <nav-bar><div slot="center">商品分类</div></nav-bar>
  </div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar.vue";
  export default {
    name: '',
		components:{
			NavBar
		}
  }
</script>

<style scoped>
  #category_navbar{
		background-color: var(--color-tint);
		color: #fff;
		font-size: 18px;
	}
</style>

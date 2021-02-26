<template>
  <div id="cart">
		<nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
		<scroll class="content" ref="scroll">
			<cart-list />
		</scroll>
		<cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar         from 'components/common/navbar/NavBar.vue'
import scroll         from 'components/common/better-scroll/Scroll.vue'
import CartList       from './childComp/CartList.vue'
import CartBottomBar  from './childComp/CartBottomBar.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
	components:{
		NavBar,
		CartList,
		scroll,
		CartBottomBar
	},
	computed:{
		//mapGetters让vuex中的getters映射为局部的计算属性，如果我们想对vuex中的属性进行计算属性操作可以使用此法
		...mapGetters(['cartLength']),
	},
	activated() {
		this.$refs.scroll&&this.$refs.scroll.refresh()
	}
}
</script>

<style scoped>
	#cart{
		height: 100vh;
	}
  .nav-bar{
		background-color: var(--color-tint);
		color: #FFFFFF;
		font-size: 18px;
	}
	.content{
		height: calc(100% - 90px - 40px);
		background-color: #fff;
		overflow: hidden;
	}
</style>

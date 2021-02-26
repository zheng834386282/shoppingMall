<template>
  <div id="app">
		
    <TabBar>
			
			<TabBarItem path="/home">
				<div slot="item-font" class="icon iconfont">&#xe76d</div>
				<div slot="item-text">首页</div>
			</TabBarItem>
	
			<TabBarItem path="/category">
				<div slot="item-font" class="icon iconfont">&#xe747</div>
				<div slot="item-text">分类</div>
			</TabBarItem>
			
			<TabBarItem path="/cart">
				<div slot="item-font" class="icon iconfont">&#xe742</div>
				<div slot="item-text">购物车</div>
			</TabBarItem>
			
			<TabBarItem path="/profile">
				<div slot="item-font" class="icon iconfont">&#xe75a</div>
				<div slot="item-text">我的</div>
			</TabBarItem>
			
			
		</TabBar>
		
  </div>
</template>

<script>
	import TabBar from 'components/common/tabbar/Tabbar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
  export default {
  name: 'MainTabBar',
	components:{
		TabBar,
		TabBarItem
	  }
  }
</script>

<style>
	
</style>

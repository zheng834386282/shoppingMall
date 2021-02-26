<template>
	
		<div class="tab-bar">
			<slot></slot>
		</div>
		
</template>

<script>
  export default {
  name: 'Tabbar',
  }
</script>

<style scoped="scoped">
	.tab-bar{
		display: flex;
		position: fixed;
		left: 0;right:0;bottom: 0;
		background-color: #f6f6f6;
		box-shadow: 0 -3px 5px rgba(100,100,100,0.05);
		}
	
	
</style>

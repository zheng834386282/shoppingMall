<template>
  <div class="recommend-view">
    <div v-for="item in recommends" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'recommendView',
	props:{
		recommends:{
			type:Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style scoped>
  .recommend-view {
		display: flex;
		padding: 10px 0 20px;
		text-align: center;
		border-bottom: 8px solid #eee;
	}
	.recommend-item{
		flex: 1;
		font-size: 12px;
	}
	.recommend-item img{
		width: 70px;
		height: 70px;
		margin-bottom: 8px;
	}
</style>

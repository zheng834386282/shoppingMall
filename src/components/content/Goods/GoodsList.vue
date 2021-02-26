<template>
  <div class="goods">
    <goodsItem v-for="item in goods" :item="item">
		</goodsItem>
  </div>
</template>

<script>
import goodsItem from './GoodsItem.vue'
export default {
  name: 'GoodsList',
	props:{
		goods:{
			type:Array,
			default(){
				return []
			}
		}
	},
	components:{
		goodsItem
	}
}
</script>

<style scoped>
  .goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
</style>

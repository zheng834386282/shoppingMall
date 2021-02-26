<template>
  <div class="goods-item" @click="itemClick">
    <a>
			<img v-lazy="showImg" alt="" @load="imageLoad()">
			<div class="goods-info">
				<p>{{item.title}}</p>
				<span class="price">{{item.price}}</span>
				<span class="collect">{{item.cfav}}</span>
			</div>
		</a>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
	props:{
		item:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	data(){
		return {
			timer:null
		}
	},
	computed:{
		showImg(){
			return this.item.img||this.item.image||this.item.show.img
		}
	},
	methods:{
		imageLoad(){
				this.$bus.$emit('imageLoad')
				this.$bus.$emit('cateImgLoad')
		},
		itemClick(){
			if(this.item.item_id)
			{
				//推荐商品的跳转
				// this.$router.push({
				// 	path:'/detail',
				// 	query:{
				// 		iid:this.item.item_id
				// 	}
				// })
			}
			this.$router.push({
				path:'/detail',
				query:{
					iid:this.item.iid
				}
			})
		}
	}
	
}
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>

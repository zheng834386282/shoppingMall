<template>
  <div>
		<swiper>
			<swiperitem v-for="item in banners">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="swiperImgLoad">
				</a>
			</swiperitem>
		</swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name: 'Home',
	components:{
		swiper:Swiper,
		swiperitem:SwiperItem
	},
	data(){
		return {
			isLoad:true
		}
	},
	props:{
		banners:{
			type:Array,
			default(){
				return []
			}
		}
	},
	methods:{
		swiperImgLoad(){
			if(this.isLoad)
			{
				this.$emit('swiperImgLoad')
				this.isLoad=false
			}
		}
	}
	
}
</script>

<style>
  
</style>

<template>
  <div>
    <Swiper class="swiper-wrapper">
			<SwiperItem v-for="item in topImages"><img :src="item" alt=""></SwiperItem>
		</Swiper>
  </div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
  export default {
    name: 'detailSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		data(){
			return {
				
			}
		},
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}
		},
		
  }
</script>

<style scoped>
  .swiper-wrapper{
		height: 300px;
		overflow: hidden;
	}
</style>

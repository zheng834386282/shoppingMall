 <template>
   <div>
		 <cart-item v-for="(item,index) in cartList" :key="index" :item="item"></cart-item>
   </div>
 </template>
 
 <script>
 import scroll   from 'components/common/better-scroll/Scroll.vue'
 import CartItem from './CartItem.vue'
 import {mapGetters} from 'vuex'
 export default {
   name: 'CartList',
 	 components:{
 		scroll,
		CartItem
 	},
	computed:{
		...mapGetters(['cartList'])
	}
 }
 </script>
 
 <style scoped>
   .content {
 		background-color: red;
 		height: 300px;
 		overflow: hidden;
 	}
 </style>
  
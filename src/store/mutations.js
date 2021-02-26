import {ADD_COUNT,ADD_CART} from './mutation-types.js'

export default {
   	[ADD_COUNT](state,payload){
			payload.count++
		},
		[ADD_CART](state,payload){
			//不仅仅是异步，复杂的逻辑判断也可以交给actions处理
			//这里 点击之后 同款商品count++和不同商品push在vue的调试台上就看不出来都是addCart，所以交给actions比较好
			// let oldProduct=state.cartList.find(item =>payload.iid==item.iid)
				
			// if(oldProduct){
			// 	oldProduct.count++
			// }
			// else{
			// 	payload.count=1
			  payload.checked=true
				state.cartList.push(payload)
			}
	}
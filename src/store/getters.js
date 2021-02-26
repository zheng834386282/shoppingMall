export default {  //类似计算属性
		cartLength(state){
			return state.cartList.length
		},
		cartList(state){
			return state.cartList
		}
	}
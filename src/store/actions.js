import {ADD_COUNT,ADD_CART} from './mutation-types.js'

export default {
	addCart(context,payload){
		return new Promise((resolve,reject)=>{
			let oldProduct=context.state.cartList.find(item =>payload.iid==item.iid)
				
			if(oldProduct){
				//对state中的属性动手都必须经过mutations
				context.commit(ADD_COUNT,oldProduct)
				// oldProduct.count++
				resolve('该商品数量+1')
			}
			else{
				payload.count=1 //直接在product对象中添加属性再赋值
				context.commit(ADD_CART,payload)
				// state.cartList.push(payload)
				resolve('已加入购物车')
			}
		})
	}
		
}
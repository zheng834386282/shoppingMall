<template>
  <div id="cart-bottom-bar">
    <div class="check-content">
			<check-button class="checkAll" 
			:isChecked="isSelectAll"
			@click.native="selectAll" ></check-button>
			<span>全选</span>
		</div>
		
		<div class="total-price">
			总计:{{totalPrice}}
		</div>
		
		<div class="calculate"@click="calcClick">
			去结算({{totalLength}})
		</div>
  </div>
</template>

<script>
	import CheckButton from "components/content/checkButton/CheckButton.vue";
	import {mapGetters}  from 'vuex'
  export default {
    name: 'CartBottomBar',
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['cartList']),
			totalPrice(){
				return this.cartList.filter(item=>{return item.checked==true}).reduce((prev,item)=>{
					return prev+item.realPrice*item.count
				},0).toFixed(2)  //,0是给prev传值初始为0
			},
			totalLength(){
				// return this.cartList.filter(item=>{return item.checked==true}).length
				return this.cartList.filter(item=>{return item.checked==true}).reduce((prev,item)=>{
					return prev+item.count
				},0) //,0是给prev传值初始为0
			},
			isSelectAll(){
				if(this.cartList.length==0)return false
				return !this.cartList.find(item=>{return item.checked==false}) //有一个成员那结果就是false，
				//用find比forEach好，找到就退出性能好一些
			}
		},
		methods:{
			selectAll(){
				if(this.cartList.find(item=>{return item.checked==false})){
					this.cartList.forEach(item=>{item.checked=true})
				}
				else{
					this.cartList.forEach(item=>{item.checked=false})
				}
			},
			calcClick(){
				if(!this.totalLength){ this.$toast.show('请选择商品',2000)}
			}
		}
  }
</script>

<style scoped>
  #cart-bottom-bar{
		height: 40px;
		background-color: #fff;
		width:100%;
		display: flex;
		line-height: 40px;
	}
	.check-content{
		display: flex;
		align-items: center;
		height: 40px;
		width: 70px;
	}
	.checkAll{
		margin-left: 8px;
		margin-right: 8px;
	}
	.total-price{
		text-align: center;
		flex:1
	}
	.calculate{
		width: 110px;
		background-color: indianred;
		text-align: center;
		color: #fff;
	}
</style>

<template>
  <div id="count_message">
    <div class="box">
				<div class="text">
					<div>  <span class="diff"> {{showBalance}} </span> 元</div>
					<div class="description">我的余额</div>
				</div>
		</div>
		<div class="box">
			<div class="text">
				<div> <span class="diff">  {{discount}} </span> 个</div>
				<div class="description">我的优惠</div>
			</div>
		</div>
		<div class="box">
			<div class="text">
				<div> <span class="diff">  {{score}}</span>  分</div>
				<div class="description">我的积分</div>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'CountMes',
		data(){
			return {
				balance:0,
				score:0,
				discount:0
			}
		},
		computed:{
			showBalance(){
				return this.balance.toFixed(2)
			}
		}
  }
</script>

<style scoped>
  #count_message{
		display: flex;
		height: 90px;
		background-color: white;
	}
	 .box{
		 height: 100%;
		 flex: 1;
		 width: 33%;
		 display: flex;
		 justify-content: center;
		 align-items: center;
	 }
	 .text {
		 width: 84px;
		 text-align: center;
		 font-size: 16px;
		 /* margin:0 auto; */
	 }
	 .diff{
		 color: orangered;
		 font-size: 24px;
		 display: inline-block;
		 margin-right: -3px;
	 }
	 .description{
		 margin-top: 5px;
		 margin-left: -2px;
	 }
</style>

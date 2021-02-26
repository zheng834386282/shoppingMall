<template>
  <div id="detail_block">
    <div>
			<img src="~assets/img/profile/message.svg" alt=""><span>我的消息</span>
		</div>
		<div>
			<img src="~assets/img/profile/pointer.svg" alt=""><span>积分商城</span>
		</div>
		<div>
			<img src="~assets/img/profile/vip.svg" alt=""><span>会员卡</span>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBlock'
  }
</script>

<style scoped>
  #detail_block{
		margin-top: 15px;
		width: 100%;
	}
	#detail_block div{
		height: 47px;
		background-color: white;
		margin-top: 4px;
		position: relative;
	}
	#detail_block div span{
		position: absolute;
		top: 15px;
	}
	#detail_block div img{
		width: 25px;
		height: 35px;
		display: inline-block;
		margin-top: 5px;
		margin-left: 8px;
		margin-right: 7px;
	}
</style>

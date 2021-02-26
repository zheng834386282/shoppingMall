<template>
		<div id="to_login">
		  <div class="avatar"><img src="~assets/img/profile/avatar.svg" alt=""></div>
			<div class="text">
				<div class="login_text">登录/注册</div>
					<img src="~assets/img/profile/phone.svg" alt=""><span class="phone_text">登录绑定手机号</span>
			</div>
			<div class="right_arrow">
				<img src="~assets/img/detail/right_arrow.svg" alt="">
			</div>
		</div>
</template>

<script>
  export default {
    name: 'ToLogin'
  }
</script>

<style scoped>
  #to_login{
		height: 100px;
		background-color: var(--color-tint);
		display: flex;
	}
	.avatar{
		height: 100%;
	}
	.avatar img{
		height: 60px;
		width: 80px;
		margin-top: 22px;
	}
	.text{
		height: 100%;
		line-height: 80px;
		color: #FFFFFF;
		flex: 1;
	}
	
	.text img{
		height: 15px;
		width: 18px;
		margin-left: -6px;
		margin-top: 20px;
	}
	.login_text{
		margin-bottom: -55px;
		font-size: 18px;
	}
	.phone_text{
		font-size: 13px;
	}
	
	.right_arrow img{
		width: 35px;
		height: 35px;
		margin-top: 34px;
	}
</style>

<template>
  <div id="login">
    <nav-bar class="nav_bar">
			<div slot="left" class="back" @click="imgClick"><img src="~assets/img/common/back.svg" alt=""></div>
			<div slot="center" class="top_title">账号登录</div>
			<span class="right-air" slot="right"></span>
		</nav-bar>
		<div class="login_box">
			<input type="text" value="" placeholder="用户名/邮箱/手机号" />
			<input type="password" value="" placeholder="密码" />
			<input type="submit" value="登录" id="submit" />
			<div class="forget"><a href="#">忘记密码</a></div>
		</div>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: 'Login',
		components:{
			NavBar,
		},
		methods:{
			imgClick(){
				this.$router.back()
			}
		}
  }
</script>

<style scoped>
 .nav_bar{
		background-color: white;
		font-size: 18px;
		color: #000000;
	}
	#login{
		height: 100vh;
		position: relative;
		z-index: 9;
		background-color: #FFFFFF;
	}
	.login_box{
		height: 400px;
		width: 330px;
		margin: 40px auto;
	}
	.login_box input{
		font-size: 18px;
		height: 60.6px;
		width: 330px;
		border: 0;     /* 去除未选中状态边框 */
		outline: none; /* 去除选中状态边框 */
    background-color: rgba(0,0,0,0); /* 透明背景 */
		border-bottom: 1px solid rgba(33,33,33,.2);
	}      
	#submit{
		width: 300px;
		height: 50px;
		background-color: deeppink;
		/* margin:30px auto; */
		margin-left: 10px;
		margin-top: 30px;
		color: white;
		background-color: var(--color-tint);
		border-radius: 24px;
	}
	.forget a{
		color: #999999;
		font-size: 14px;
	}
	.forget{
		width: 60px;
		position: absolute;
		right:40px;
		top: 305px;
		/* margin-left: 55px; */
	}
	.back {
		margin-top: 6px;
		margin-left: 8px;
	}
	.right-air{
		margin-left: 30px;
	}
</style>

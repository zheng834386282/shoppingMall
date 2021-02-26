<template>
  <div id="profile">
		<nav-bar class="nav_bar"><div slot="center" class="top_title">我的档案</div></nav-bar>
		<to-login @click.native="loginClick" />
		<count-mes></count-mes>
		<detail-block></detail-block>
		<about></about>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import ToLogin from './childComps/ToLogin.vue'
	import CountMes from './childComps/CountMes.vue'
	import DetailBlock from './childComps/DetailBlock.vue'
	import About from './childComps/About.vue'
export default {
  name: 'Profile',
	components:{
		NavBar,
		ToLogin,
		CountMes,
		DetailBlock,
		About
	},
	methods:{
		loginClick(){
			this.$router.push('/profile/login')
		}
	}
}
</script>

<style scoped>
  .nav_bar{
		background-color: var(--color-tint);
		font-size: 18px;
		color: #FFFFFF;
	}
	#profile{
		background-color:rgba(99,99,99,.2);
		height:100vh
	}
</style>

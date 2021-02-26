<template>
  <div id="nav-bar">
    <navbar>
    	<div slot="left" class="back" @click="imgClick"><img src="~assets/img/common/back.svg" alt=""></div>
    	<div  slot="center" class="tab-title">
    		<div v-for="(item,index) in titles" 
				class="tab-title-item" 
				@click="itemClick(index)"
				:class="{active:index==currentIndex}"
				>{{item}}</div>
    	</div>
			<span class="right-air" slot="right"></span>
    </navbar>
  </div>
</template>

<script>
	import navbar from 'components/common/navbar/NavBar.vue'
  export default {
    name: 'detailNavBar',
		components:{
			navbar
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex=index
				this.$emit('titleClick',index)
			},
			imgClick(){
				this.$router.back()
			}
		}
  }
</script>

<style scoped>
 .tab-title{
		display: flex;
		margin-left: 10px;
	}
	.tab-title-item{
		flex: 1;
		font-size: 13px;
	}
	.right-air{
		margin-left: 30px;
	}
	.back {
		margin-top: 6px;
		margin-left: 8px;
	}
	.active{
		color:var(--color-high-text);
	}
	#nav-bar{
		background-color: #fff;
		position: relative;
		z-index: 10;
	}
</style>

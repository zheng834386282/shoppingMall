<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Toast',
		data(){
			return {
				
			}
		},
		props:{
			message:{
				type:String,
				default(){
					return '默认信息'
				}
			},
			isShow:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		methods:{
			show(message,keepTime=2000){
				// 这里keepTime设置默认值是es6语法
				// es5是这样实现的
				message=message||'默认文字' 
				this.isShow=true
				this.message=message
				setTimeout(()=>{
					this.isShow=false
					this.message=''
				},keepTime)
			}
		}
  }
</script>

<style scoped>
  .toast{
		width: 8rem;
		height: 3.125rem;
		
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 99;
		
		background-color: rgba(0,0,0,.5);
		border-radius:0.3125rem;
		color: #ffffff;
		
		line-height: 3.125rem;
		text-align: center;
		
	}
</style>

<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
			<slot></slot>
		</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
	data(){
		return {
			scroll:null,
			positionY:null
		}
	},
	props:{
		probeType:{
			type:Number,
			default(){
				return 0
			}
		},
		pullUpLoad:{
			type:Boolean,
			default(){
				return false
			}
		}
		
	},
	mounted() {
		//1.创建scroll对象
		this.scroll=new BScroll(this.$refs.wrapper,{  //用ref方法除了能拿到组件，还能拿到dom元素，并且这个wrapper不会影响其他组件的wrapper
			probeType:this.probeType,
		  click:true,
			pullUpLoad:this.pullUpLoad //是否开启上拉加载 对应钩子pullingUp
		})
		
		//2.监听滚动的位置
		if(this.probeType==2 || this.probeType==3){
			this.scroll.on('scroll',position=>{
				this.positionY=position.y
				this.$emit('scrollListener',position)
			})
		}
		
		//3.监听滚到底部
		if(this.pullUpLoad){
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullUp')
			})
		}
	},
	methods:{
		scrollTo(x,y,time){
			this.scroll&&this.scroll.scrollTo(x,y,time)
		},
		refresh(){
			this.scroll&&this.scroll.refresh()
		},
		finishPullUp(){
			this.scroll&&this.scroll.finishPullUp()
		}
	}
}
</script>

<style scoped>

</style>

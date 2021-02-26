import {deBounce} from 'common/utils.js'
import backTop from 'components/content/backTop/backTop.vue'


export const imgMixinListener = {
  data() {
    return {
      bcFunc: null
    };
  },
  mounted() {
    // 防抖 使用混入是为了增加代码复用，这段代码会加到使用混入的组件的mounted中
		// 但由于测试中可能会使滚动出现bug就不使用混入了
    const refresh = deBounce(this.$refs.scroll&&this.$refs.scroll.refresh, 50);
    this.bcFunc = () => {
      refresh();
    };
		this.$bus.$on('imageLoad',this.bcFunc)
  }
}

//回到顶部按钮 的 混入
export const backTopMixin = {
	components:{
		backTop
	},
	data(){
		return{
			isMounted:false
		}
	},
	computed:{
		isBackTopShow(){
			if(this.isMounted)
			{return (-this.$refs.scroll.positionY>1000)}
		}
	},
	mounted(){
		this.isMounted=true
	},
	methods:{
		backClick(){
			this.$refs.scroll.scrollTo(0,0,0) //给home的scroll子组件定个ref属性就能父访问子组件中的属性了比如data中的scroll对象
		}
	},
}


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//1.事件总线:Vue实例有$on,$emit等方法，所以可以作为$bus的事件总线
Vue.prototype.$bus=new Vue()

//2.安装插件toast (由一个对象转变为插件)
Vue.use(toast)

//3.安装vue的懒加载插件
//**记得把需要懒加载的图片 引用写法 由 :src="..."  ===> v-lazy="..."
//之前等加载完再计算的函数不用修改，因为他会先加载高度放置placeHolder图片，或者不放图片空有高度撑着
Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/placeholder.png")
});

//解决移动端的点击有300ms延迟问题，因为这300ms被设计来监听双击
//因为加入之后会莫名报错所以暂时不用
// FastClick.attach(document.body)

new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')

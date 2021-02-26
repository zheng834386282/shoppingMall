import Toast from './Toast.vue'
const obj={
	
}
obj.install=function(Vue){            //一旦在vue上安装了该插件，就会执行install方法而且把Vue对象传过来
	const toastConstructor = Vue.extend(Toast)
	const toast=new toastConstructor()
	toast.$mount(document.createElement('div')) //$mount是将组件对象 手动挂载到你所需的元素上，这里是新创建的div
	document.body.appendChild(toast.$el)
	Vue.prototype.$toast=toast
	// 我们是利用 Vue.use() 让项目的main.js在解析时就触发install事件
	//  而install事件中携带：
	// 1.创造toast组件 用写好的toast组件作为组件构造器的参数先造出构造器。
	// 2.再用new造出组件对象。
	// 3.并将其手动挂载到页面(document)新建的div中
	// 4.将该div添加到body中
	// 5.将该组件对象设为全局组件(对象) (prototype)
}

export default obj
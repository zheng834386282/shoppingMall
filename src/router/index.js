//配置路由相关信息(搭建路由框架)
import Vue from 'vue' 
import App from '../App.vue'

//正常加载代码
//import Home from  '../components/home.vue'
//import About from '../components/about.vue'
//import Me from    '../components/me.vue'
//import User from  '../components/user.vue'

//路由懒加载代码
const Home=  ()=>import ('views/home/Home.vue')
const Category= ()=>import ('views/category/Category.vue')
const Cart=    ()=>import ('views/cart/Cart.vue')
const Profile=  ()=>import ('views/profile/Profile.vue')
const Detail=  ()=>import ('views/detail/Detail.vue')
const MoreComments= ()=>import ('views/detail/childComp/DetailMoreComments.vue')
const Login= ()=>import('views/profile/childComps/Login.vue')
//1.导入路由插件
import VueRouter from 'vue-router'


//2.通过Vue.use(插件) 安装路由插件
Vue.use(VueRouter)

//3.创建VueRouter对象 (和之前创建Vue实例一样的)
const routes=[
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/detail',
		component:Detail
	},
	{
		path:'/detail/comments',
		component:MoreComments
	},
	{
		path:'/profile/login',
		component:Login
	},
]
const router=new VueRouter({
	//配置路径和组件的应用关系
	routes,        //routes:routes的es6简写法
	mode:'history'  ,//因为vue-router默认使用hash模式，更改url是用加#，再改#后参数来实现的。因为#不好看，所以我们用history模式就不会出现#
	linkActiveClass:'active' //使用此属性可以更改被点击元素的class类名
})


//5.将router对象传入到vue实例中进行挂载使用
export default router


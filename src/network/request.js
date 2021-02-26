import axios from 'axios'

export function request(config) {
	  //1.创建axios的实例
		const instance1=axios.create({
			baseURL:'http://152.136.185.210:7878/api/m5',
			timeout:5000
		})
		
		//2.axios的拦截器 --axios.interceptors.request.use就是全局拦截
		
		     //2.1:请求拦截
		     instance1.interceptors.request.use(config=>{
		     	return config
		     },err=>console.log(err))
			
			
			   //2.2:响应拦截
			   instance1.interceptors.response.use(res=>{			
			   	return res.data   //我们只要res.data就行了
			   },err=>console.log(err))
		
		
		
		//3.把实例返回出去
		return instance1(config) //这个实例就是个promise对象的 源码能知道
	
}
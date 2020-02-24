import axios from 'axios'

export function request(config) {
    //创建实例
    const instance = axios.create({
       /* baseURL: 'http://123.207.32.32:8000/api/hy',*/
       /* baseURL:'http://yapi.demo.qunar.com/mock/29662/suppermall',*/
     baseURL:'http://106.54.54.237:8000/api/hy',
        timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config)
        return config
    },err=>{
        //console.log(err)
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })
    //发出真正的请求
    return instance(config)
}

import Toast from "./Toast";

const obj = {}
obj.install = function (Vue) {
    //创建组件构建器
    const toastContrustor = Vue.extend(Toast)
    //用new的方法创建出一个新的组件对象
    const toast = new toastContrustor()
    console.log(toast)
    //将组件对象手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast=toast

}
export default obj

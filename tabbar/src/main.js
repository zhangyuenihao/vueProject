import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
/*import axios from 'axios'*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.use(VueAwesomeSwiper)
Vue.use(toast)
Vue.use(VueLazyload, {
    loading: require('./assets/image/common/placeholder.png')
})
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
/*axios.defaults.baseURL='http://123.207.32.32:8000/api/v1/'*/
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
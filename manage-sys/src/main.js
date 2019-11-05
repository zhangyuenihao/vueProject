import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import axios from 'axios'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/graphic'


Vue.config.productionTip = false
Vue.component('chart', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc161b79c2ccc4a3130ff05/echarts'
console.log(process.env.BASE_URL);
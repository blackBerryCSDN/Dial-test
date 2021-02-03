import Vue from 'vue'
import App from './App'

// 封装的带参路由跳转
import * as navTo from './util/navTo.js'  
Vue.prototype.$navTo = navTo

// 本地测试接口数据
import { myRequest } from './util/api.js'
Vue.prototype.$myRuquest = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

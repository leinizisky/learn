import Vue from 'vue'
import App from './App.vue'
//import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'


Vue.config.productionTip = false
//fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App)
}).$mount('#app')

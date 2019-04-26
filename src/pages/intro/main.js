import Vue from 'vue'
import Intro from './Intro.vue'
import 'ehanlin-basicss/src/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: createElement => createElement(Intro)
}).$mount('#app')

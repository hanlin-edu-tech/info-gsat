import Vue from 'vue'
import Download from './Download.vue'
import 'ehanlin-basicss/src/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: createElement => createElement(Download)
}).$mount('#app')

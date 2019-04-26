import Vue from 'vue'
import Timeline from './Timeline.vue'
import 'ehanlin-basicss/src/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: createElement => createElement(Timeline)
}).$mount('#app')

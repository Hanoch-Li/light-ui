import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Demo from '../components/lib/demo'
import Button from '../components/lib/button'
import Icon from '../components/lib/icon'

import '../components/lib/style/iconfont/iconfont.css'

Vue.use(Demo)
Vue.use(Button)
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

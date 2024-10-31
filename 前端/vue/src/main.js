import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入ElementUI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入全局css
import '@/assets/css/global.css'

Vue.config.productionTip = false
//使用ElementUI框架
Vue.use(ElementUI, { size: 'small' });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

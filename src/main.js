import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './components/message/msgService';
import './components/SvgIcon'
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

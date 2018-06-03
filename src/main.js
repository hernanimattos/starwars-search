import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './assets/styles/reset.css';

Vue.filter('formatHeight', value => value.replace(/([0-9]{2})$/g, ',$1'));

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

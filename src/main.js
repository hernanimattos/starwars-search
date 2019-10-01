import VueTagManager from 'vue-tag-manager';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/styles/reset.css';

Vue.filter('formatHeight', value => value.replace(/([0-9]{2})$/g, ',$1'));

Vue.config.productionTip = false;

Vue.use(VueTagManager, {
  gtmId: 'GTM-P2S3FSV',
});
Vue.gtm.push({ event: 'testeDeEvento' });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

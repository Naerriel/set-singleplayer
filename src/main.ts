import Vue from 'vue';
import App from './App.vue';
// @ts-ignore
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  // @ts-ignore
  store,
  render: (h) => h(App),
}).$mount('#app');

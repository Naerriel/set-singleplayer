import Vue from 'vue';
import App from './App.vue';
// @ts-ignore
import store from './store/index';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  // @ts-ignore
  store,
  render: (h) => h(App),
}).$mount('#app');

// @ts-ignore
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;

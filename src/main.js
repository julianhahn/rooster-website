import Vue from 'vue';
import VCalendar from 'v-calendar';
import Vuetify from 'vuetify';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import tracking from '@/tracking';
import '@/registerServiceWorker';
import '@/firebase';

import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');

tracking.init(router);

import './firebase';
import Vue from 'vue';
import VCalendar from 'v-calendar';
import { firestorePlugin } from 'vuefire';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader


Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(firestorePlugin);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');

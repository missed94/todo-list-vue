import Vue from 'vue'
import App from './App.vue'
import 'reset-css';
import router from "./router";
import {store} from "./store/store";


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

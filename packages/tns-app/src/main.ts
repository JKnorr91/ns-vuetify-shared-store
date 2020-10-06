import Vue from 'nativescript-vue'
import App from './components/App.vue'
import VueDevtools from 'nativescript-vue-devtools'
import {createStore} from "store/src/main";

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

const store = createStore(Vue);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()

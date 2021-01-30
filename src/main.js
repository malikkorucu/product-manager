import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import M from 'materialize-css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vueResource from 'vue-resource'

import SuiVue from 'semantic-ui-vue'
import '../semantic/dist/semantic.min.css'


import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);

Vue.use(router)
Vue.use(vueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(M)
Vue.use(SuiVue)
Vue.use(vuetify)

Vue.config.productionTip = false
Vue.http.options.root = 'https://product-manager-89ae8.firebaseio.com/'

// filters *********************

Vue.filter('currency', value => {
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2
    })

    let x = formatter.format(value)
    return x
})


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
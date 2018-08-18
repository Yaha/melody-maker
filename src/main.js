import Vue from 'vue'

// Root component
import Root from '@/app/core/components/Root'

// Global router
import router from '@/router'

// Global vuex
import store from '@/store'

// Service Worker
import '@/registerServiceWorker'

// Theme
import '@/theme.js'

// Plugins
import eventbus from '@/plugins/eventbus'

// Effortlessly keep vue-router and vuex store in sync.
import { sync } from 'vuex-router-sync'
sync(store, router) // https://github.com/vuejs/vuex-router-sync/tree/next

Vue.use(eventbus)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app')

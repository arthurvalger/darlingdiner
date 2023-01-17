import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(fas);
library.add(faGithub, faTwitter, faFacebook, faInstagram, faYoutube)
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

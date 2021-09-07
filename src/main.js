import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faImages,
  faEnvelope,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faImages, faEnvelope, faFileAlt, faLinkedin, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

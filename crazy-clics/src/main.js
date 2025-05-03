import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import font awesome icon de type "brand" */
import { faGithub, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
/* Ajout des icon à la bibliothèque */
library.add(faGithub, faLinkedin, faInstagramSquare)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

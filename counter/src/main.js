import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import font awesome icon de type "regular" */
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
/* Ajout des icon à la bibliothèque */
library.add(faCalculator)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { createYmapPlugin } from 'vue-yandex-maps'

library.add(fas, far, fab)

// const settings = {
// 	apiKey: 'a3279835-a722-41b3-8d46-9a95be8b9459',
// 	lang: 'ru_RU',
// 	coordorder: 'latlong',
// 	debug: false,
// 	version: '2.1',
// }

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

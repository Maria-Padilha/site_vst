import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from "pinia";
import { loadFonts } from './plugins/webfontloader'
import '@/assets/css/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

loadFonts()

const pinia = createPinia();
AOS.init();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';

import { IonicVue, isPlatform } from '@ionic/vue';

/** Tailwind CSS config */
import '@/tailwind.scss'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/** global scss */
import './style.scss'

const pinia = createPinia();
const app = createApp(App);

app.use(IonicVue)
  .use(router)
  .use(pinia);

/** Import default global using components */
import HeaderComponent from '@/components/Header/HeaderComponent.vue';
import HeaderInteriorComponent from '@/components/Header/HeaderInteriorComponent.vue';

app.component('headerComponent', HeaderComponent);
app.component('headerInteriorComponent', HeaderInteriorComponent);

import axios from 'axios';
axios.defaults.timeout = 5000;


router.isReady().then(() => {
  app.mount('#app');
});
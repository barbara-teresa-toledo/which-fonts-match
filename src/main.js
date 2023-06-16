import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/bootstrap4-light-purple/theme.css"
import ToastService from 'primevue/toastservice';


const app = createApp(App)

app.use(PrimeVue);

app.use(ToastService);

app.mount('#app')

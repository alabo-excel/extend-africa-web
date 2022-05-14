import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import Flutterwave from 'vue-flutterwave'


createApp(App).use(router).use(Flutterwave, { publicKey: 'FLWPUBK_TEST-0940cf64603068206731635ed2ef2cc7-X' }).mount('#app')
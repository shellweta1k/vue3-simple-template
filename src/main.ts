import { createApp } from 'vue';
import './style/index.scss';
import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import pinia from './store';
createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app');

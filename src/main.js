import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import store from './store/index.js'
const app=createApp(App)
        .use(router)
        .use(Antd)
        .use(store)
app.config.productionTip = false;

app.mount('#app')

import Vue from 'vue'
import App from './App'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false

// Vue.use(ViewUI);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

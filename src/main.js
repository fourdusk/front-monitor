import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.config.errorHandler = function (err) {
  console.log('vue 异常: ', err)
  // throw err
}
app.mount('#app')

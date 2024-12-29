import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importar o arquivo do router

// Crie a aplicação e use o roteador
const app = createApp(App)

app.use(router) // Registrar o Vue Router

app.mount('#app') // Montar a aplicação

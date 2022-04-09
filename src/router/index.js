import {createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'
import Conference from '../views/conference.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/conference', component: Conference },
    { path: '/contact', component: Contact },

]
const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router

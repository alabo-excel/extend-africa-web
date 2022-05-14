import {createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'
import Conference from '../views/conference.vue'
import Academy from '../views/academy.vue'
import Donate from '../views/donate.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/conference', component: Conference },
    { path: '/contact', component: Contact },
    { path: '/academy', component: Academy },
    { path: '/donate', component: Donate },
]
const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router

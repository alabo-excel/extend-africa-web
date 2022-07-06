import {createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'
import Conference from '../views/conference.vue'
import Academy from '../views/academy.vue'
import Donate from '../views/donate.vue'
import Terms from '../views/terms-and-condition.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/conference', component: Conference },
    { path: '/contact', component: Contact },
    { path: '/academy', component: Academy },
    { path: '/donate', component: Donate },
    { path: '/terms-and-condition', component: Terms },

]
const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router

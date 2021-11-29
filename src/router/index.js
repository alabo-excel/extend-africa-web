import {createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/home.vue'
import Sponsors from '../views/sponsors.vue'
import Contact from '../views/contact.vue'
import Team from '../views/team.vue'
import Story from '../views/story.vue'
import Speakers from '../views/speakers.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/sponsors', component: Sponsors },
    { path: '/contact', component: Contact },
    { path: '/team', component: Team },
    { path: '/story', component: Story },
    { path: '/speakers', component: Speakers },

]
const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router

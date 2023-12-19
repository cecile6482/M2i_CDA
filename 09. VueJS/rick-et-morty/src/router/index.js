import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CharactersView from '../views/CharactersView.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/characters', component: CharactersView },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

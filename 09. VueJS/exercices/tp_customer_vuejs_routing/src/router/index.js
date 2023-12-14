import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactDetails from '../views/ContactDetails.vue';



const router = createRouter({
  history : createWebHistory(),
  routes : [
    {path: '/', component : HomeView},
    { path: '/contacts/:userId', name: 'contacts', component: ContactDetails, props: true }

  ]
});
export default router;
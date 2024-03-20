import { createRouter, createWebHistory } from 'vue-router';
import SharePage from '@/views/SharePage.vue';
import Calculator from '@/views/Calculator.vue'; 


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/share/:id',
      name: 'SharePage',
      component: SharePage
    },
  ],
});

export default router;

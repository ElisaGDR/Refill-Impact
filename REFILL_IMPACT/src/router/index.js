import Vue from 'vue';
import Router from 'vue-router';
import SharePage from '../components/SharePage.vue'; 

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/share/:id',
      name: 'SharePage',
      component: SharePage
    },
  ],
});

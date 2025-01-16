import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import MyPage from '@/views/MyPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/test', name: 'MyPage', component: MyPage },
  ],
});

export default router;

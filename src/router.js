import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Products from './pages/Products.vue';
import Portfolio from './pages/Portfolio.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/portfolio', component: Portfolio },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

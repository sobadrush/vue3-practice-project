import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PageNotExistView from '../views/PageNotExistView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // 路由級別的代碼分割
            // 這會為這個路由生成一個單獨的代碼塊 (About.[hash].js)
            // 當訪問這個路由時，會懶加載(lazy-loaded)這個代碼塊
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/404',
            name: 'page_not_exist',
            component: PageNotExistView,
        },
        {
            path: '/:catchAll(.*)', // '*' 表示任意字串(預設路由)
            redirect: '/404',
        },
    ],
});

export default router;

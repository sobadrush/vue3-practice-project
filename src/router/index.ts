import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PageNotExistView from '../views/PageNotExistView.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import ComponentA from '@/components/Component-A.vue'
import ComponentB from "@/components/Component-B.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/helloWorld',
            name: 'hello_world',
            component: HelloWorld,
            props: route => ({ myMsg: route.query.testMsg }) // 使用 query 參數傳遞 msg
        },
        {
            path: '/toComponentA',
            name: 'component_a',
            component: ComponentA,
        },
        {
          path: '/toComponentB',
          name: 'component_b',
          component: ComponentB,
        },
        {
          path: '/toComponentC',
          name: 'component_c',
          component: () => import('@/components/Component-C.vue'),
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
            path: '/testRouter/:userId?', // '?' 表示可選參數，router-link 使用 params 來傳遞參數時必需有此設定 /:userId
            name: 'myTestRouter',
            component: () => import('../components/RouterTestComponent.vue'),
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

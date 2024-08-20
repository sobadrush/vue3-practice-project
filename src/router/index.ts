import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PageNotExistView from '../views/PageNotExistView.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import UsersComponent from '@/components/UsersComponent.vue'
import ComponentA from '@/components/Component-A.vue'
import ComponentB from "@/components/Component-B.vue";
import DeptComponent from "@/components/DeptComponent.vue";
import EmpComponent from "@/components/EmpComponent.vue";

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
      props: route => ({ myMsg: route.query.testMsg }) // props：路由元件使用 defineProps 接收 props 參數用
    },
    {
      path: '/users/:userId?', // 可選參數
      name: 'to_users',
      component: UsersComponent,
    },
    {
      path: '/dept/:deptId?',
      name: 'to_dept',
      component: DeptComponent,
      children: [ // 子路由(嵌套路由, 巢狀路由)
        {
          path: 'emps', // 小心 children 裡面的 path 不要加上 / 開頭，否則會被帶回根目錄
          name: 'to_emps',
          component: EmpComponent,
          // props: route => ({ myEmpId: route.query.empId }) // 使用 params 參數傳遞 deptId
        }
      ]
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
      path: '/toComponentD',
      name: 'component_d',
      component: () => import('@/components/Component-D.vue'),
    },
    {
      path: '/toComponentE',
      name: 'component_e',
      component: () => import('@/components/Component-E.vue'),
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
      path: '/toSchool',
      name: 'school_component',
      component: () => import('@/components/99_SchoolComponent.vue'),
    },
    {
      path: '/toTodoListComponent',
      name: 'todoList_Component',
      component: () => import('@/components/98_TodoListComponent.vue'),
    },
    {
      path: '/toComponentF',
      name: 'to_ComponentF',
      component: () => import('@/components/Component-F.vue'),
    },
    {
      path: '/toSlotTestComponent',
      name: 'to_SlotTestComponent',
      component: () => import('@/components/SlotTestComponent.vue'),
    },
    {
      path: '/toPiniaComponent_1',
      name: 'to_PiniaComponent_1',
      component: () => import('@/components/PiniaComponents/PiniaComponent_1.vue'),
    },
    {
      path: '/404',
      name: 'page_not_exist',
      component: PageNotExistView,
    },
    {
      // 萬用路由，要放在路由規則的最後面
      path: '/:pathMatch(.*)*', // '*' 表示任意字串(萬用路由)，將匹配所有未定義的路由，並將其重定向到 /404 組件。這是一種處理 404 錯誤的常見方式
      redirect: '/404',
    },
  ],
});

export default router;

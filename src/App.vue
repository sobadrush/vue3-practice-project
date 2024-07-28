<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'
  import SidebarComponent from './components/sidebar-component/index.vue' // 因為使用 class component , vue3 會怪怪的
  import HeaderComponent from "./components/header-component.vue";
</script>

<template>
  <div class="wrapper d-flex align-items-stretch">

    <!-- Sidebar  -->
    <SidebarComponent />

    
    <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">
      
      <!-- Header 區 -->
      <HeaderComponent />
      
      <!-- 路由抽換區 -->
      <RouterView />
    </div>
  </div>
</template>

<!-- <template>
  <header>
    在 Vue 專案中，使用 @ 符號代表 src 目錄，這是通過 webpack 配置的別名
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->

<!--  <style scoped> 是用來限定樣式範圍的，
      這意味著定義在這個 <style> 區塊中的樣式只會作用於當前的組件，而不會影響其他組件或全局樣式。  -->
<!-- <style scoped>
  #sidebar a{
    font-size: 1.2rem;
    color: rgb(0, 255, 128);
  }
</style> -->

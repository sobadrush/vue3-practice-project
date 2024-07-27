<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'
  import SidebarComponent from './components/sidebar-component/index.vue'
</script>

<template>
  <div class="wrapper d-flex align-items-stretch">

    <!-- Sidebar  -->
    <SidebarComponent />

    <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <!-- 收合按鈕 -->
          <button type="button" id="sidebarCollapse" class="btn btn-primary">

          <i class="fa fa-bars"></i>
          <span class="sr-only">Toggle Menu</span>
          </button>
          <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="javascript:void(0)">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <!-- <h2 class="mb-4">Sidebar #01</h2> -->
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

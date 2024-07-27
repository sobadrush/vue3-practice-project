<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div class="wrapper d-flex align-items-stretch">
    <!-- Navigation Bar -->
    <nav id="sidebar">
      <div class="p-4 pt-5">
        <a href="javascript:void(0)" class="img logo rounded-circle mb-5" style="background-image: url(/src/assets/images/logo.jpg);"></a>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="javascript:void(0)">Home 1</a>
              </li>
              <li>
                <a href="javascript:void(0)">Home 2</a>
              </li>
              <li>
                <a href="javascript:void(0)">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">About</a>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="javascript:void(0)">Page 1</a>
              </li>
              <li>
                <a href="javascript:void(0)">Page 2</a>
              </li>
              <li>
                <a href="javascript:void(0)">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">Portfolio</a>
          </li>
          <li>
            <a href="javascript:void(0)">Contact</a>
          </li>
        </ul>
        <div class="footer">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </nav>
  
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
      <h2 class="mb-4">Sidebar #01</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
<style scoped>
  #sidebar a{
    font-size: 1.2rem;
    color: rgb(0, 255, 128);
  }
</style>

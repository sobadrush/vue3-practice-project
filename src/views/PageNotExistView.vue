<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>{{ errorMessage }}</p>
    <router-link :to="homeLink">Go to Home (router-link)</router-link>
    <br/>
    <RouterLink :to="homeLink">Go to Home (RouterLink)</RouterLink>
  </div>
</template>

<script setup lang="ts">

  // 定義 TypeScript 變數
  const errorMessage = 'Page Not Found'
  const homeLink = '/' // 綁定到首頁鏈接

  // 可以在這裡加入其他 TypeScript 代碼
</script>

<style scoped>
  .page-not-found {
      text-align: center;
      padding: 50px;
  }

  .page-not-found h1 {
      font-size: 100px;
      margin-bottom: 20px;
  }

  .page-not-found p {
      font-size: 20px;
      margin-bottom: 20px;
  }

  .page-not-found a {
      font-size: 16px;
      color: #42b983;
      text-decoration: none;
  }

  .page-not-found a:hover {
      text-decoration: underline;
  }
</style>

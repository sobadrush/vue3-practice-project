<template>
  <div>
    <h1>Router Test Component</h1>
    <p>這是一個測試路由的組件</p>

    <p>route.params: {{ route.params }}</p>
    <p>route.query: {{ route.query }}</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute(); // 取得當前路由資訊
  const router = useRouter(); // 進行路由導航

  onMounted(() => {
    console.log('%c[RouterTestComponent] mounted!', 'color: orange;');
    console.log('route.params:', route.params);
    console.log('route.query:', route.query);
  });
</script>

<style scoped>
  /* Your component styles here */
</style>
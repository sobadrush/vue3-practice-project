<template>
  <h1>HomePage</h1>
  <p>Current count: {{ count }}</p>
  <button @click="increment">Increment</button>
</template>

<script setup lang="ts">
  // ref 是 Vue 3 中的一個 Composition API 函數，用於創建響應式數據對象。
  // 在 Vue 的 Composition API 中，ref 主要用於創建單一的響應式值，
  // 並在模板中使用或在組件內部進行操作。它是 Vue 3 中一個非常重要的功能，可以用來簡化狀態管理和響應式數據的處理。
  import { ref } from 'vue';

  const count = ref(0);
  const increment = () => {
    count.value++;
  };

</script>

<style scoped>

</style>


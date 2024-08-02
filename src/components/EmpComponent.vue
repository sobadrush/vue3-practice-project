<template>
  <h1>I'm EmpComponent</h1>
  <h3 style="color: blueviolet;">{{ empId }}</h3>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
  console.log('route.query:', route.query);
  const empId = route.query.empId; // 取得路由 query 參數 empId
</script>

<style scoped>

</style>
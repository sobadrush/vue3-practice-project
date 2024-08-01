<template>
  <h1>I'm DeptComponent</h1>
  <h2>deptIndex: {{ deptIndex }}</h2>
  <hr>

  Show 
  <router-link :to="`/dept/${deptIndex}/emps`">
    /dept/{{ deptIndex }}/emps
  </router-link>

  <hr>

  <!-- 子路由(抽換區) -->
  <router-view></router-view>

</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
  
  const deptIndex = route.params.deptId || "0000"; // 取得路由參數 deptId
</script>

<style scoped>

</style>

<template>
  <div style="border: 1px solid black; padding: 2em 2em;">
    <h2>父組件</h2>
  
    <h1 style="color: brown;">SchoolComponent</h1>
    <hr/>

    <!-- <input type="text" v-model="schooleName"/> -->
    選擇學校:
    <select v-model="schooleName">
      <option value="Duke">Duke University</option>
      <option value="Harvard">Harvard University</option>
      <option value="Berkeley">UC Berkeley</option>
    </select>

    <p>學校名稱: {{ schooleName }}</p>

    <div style="border: 1px solid black;">
      <h2>子組件</h2>
      <!-- myData1：是定義在子組件 defineProps 中的 key -->
      <StudentComponent :myData1="schooleName"/> <!-- 子組件 -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import StudentComponent from "../components/99_StudentComponent.vue";
  import { ref, watch } from 'vue';
  const schooleName = ref('');

  // 監聽 schooleName 的變化
  watch(schooleName, (newVal, oldVal) => {
    console.log(`schooleName: oldVal: ${oldVal} → newVal: ${newVal}`);
  });
</script>

<style scoped>

</style>

<template>
  <div style="border: 1px solid black; padding: 2em 2em;" v-if="queryParam === 'father_2_son'">
    <h1 style="background-color: burlywood;">父傳子</h1>
    <hr/>
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
  
  <!-- -------------------------------------------------------------- -->

  <div style="border: 1px solid black; padding: 2em 2em;" v-if="queryParam === 'son_2_father'">
    <h1 style="background-color:steelblue; color: aliceblue;">子傳父</h1>
    <hr/>
    <h2>父組件</h2>
  
    <h1 style="color: brown;">SchoolComponent</h1>
    <p>⏺ 子組件，送 emit 過來的資料：<span style="color:chocolate">{{ dataFromSon }}</span></p>
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
      <StudentComponent :myData1="schooleName" v-on:myEvent1="eventHandler_1"/> <!-- 子組件 -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeRouteUpdate, useRoute } from "vue-router";
  import StudentComponent from "../components/99_StudentComponent.vue";
  import { onMounted, ref, watch } from 'vue';
  const schooleName = ref('');

  // 監聽 schooleName 的變化
  watch(schooleName, (newVal, oldVal) => {
    console.log(`schooleName: oldVal: ${oldVal} → newVal: ${newVal}`);
  });

  // useRoute() 取得路由資訊
  const route = useRoute();
  const queryParam = ref('default');
  onMounted(() => {
    console.log('route:', route.query);
    queryParam.value = route.query['passType']?.toString() ?? ''; // ?? 是「空值合併運算符」, 若左邊是 null 或 undefined, 則取右邊的值
    console.log('queryParam.value: ', queryParam.value);
  })

  // 作用時機：當路由參數發生變化時，觸發 onBeforeRouteUpdate() 方法
  // 用途：在路由參數發生變化時，將新的參數值賦值給 queryParam.value，並進行 next() 跳轉
  // 解決：當路由路徑相同，但參數不同時，子組件不會重新渲染的問題
  onBeforeRouteUpdate((to, from, next) => {
    console.log('to:', to.query);
    queryParam.value = to.query['passType']?.toString() ?? ''; // ?? 是「空值合併運算符」, 若左邊是 null 或 undefined, 則取右邊的值
    console.log('queryParam.value: ', queryParam.value);
    next();
  })

  const dataFromSon = ref('');
  // 定義事件處理器：接收子組件傳遞的事件
  const eventHandler_1 = (data: string) => {
    dataFromSon.value = data;
    console.log(`[SchoolComponent] eventHandler_1: ${dataFromSon.value}`);
  }
</script>

<style scoped>

</style>
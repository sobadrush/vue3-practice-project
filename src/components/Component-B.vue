<template>
  <div id="my_container">
    <h1>I'm Component-B</h1>
    <hr/>
    <b >單向綁定: <span>{{ empName }}</span></b>
    <hr/>
    <b >雙向綁定:</b>
    <input type="text" v-model="username"/> <!-- 雙向綁定 -->
    <br/>
    <span style="border: 1px solid black;">{{ username }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const empName:string = 'Wolverine';
  const username = ref('DeadPool'); // ref() 用來建立一個 reactive 的變數, 並且初始化為 'DeadPool', 這樣當 username 變數改變時, 會自動更新畫面
</script>

<style scoped>
  #my_container {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 10px;
    font-size: 2em;
  }

  #my_container span {
    color: rgb(18, 58, 159);
  }
</style>
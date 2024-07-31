<template>
  <h1>Component-D</h1>
  
  <h2 class="myClass" :key="test">{{ test }}</h2> <!-- 要綁定唯一 key，setTimeout 2 秒後，"World" 才會有動畫效果 -->

  <hr/>

  <div>

    <h4>v-for 滾 陣列</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in dataList_1" 
                                      :key="index">{{ index }} : {{ item }}</li>
    </ul>
    
    <hr/>

    <h4>v-for 滾 物件</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="(vv, kk, idx) in dataList_2" 
                        v-bind:key="kk">{{ idx }}: {{ kk }} : {{ vv }}</li>
    </ul>

  </div>
</template>

<script setup lang="ts">
  // --------------------------
  import { ref } from 'vue';
  const test = ref("Hello");
  setTimeout(() => {
    test.value = "World";
  }, 2000);

  // --------------------------
  const dataList_1 = [
    "apple",
    "banana",
    "cherry",
    "grape",
    "kiwi"
  ]

  const dataList_2 = {
    key1: "Zebra",
    key2: "Elephant",
    key3: "Lion",
    key4: "Tiger",
    key5: "Giraffe"
  }

</script>

<style scoped>
  .myClass {
    color: rgb(0, 42, 255);
    font-size: 20px;
    animation: openIn 1s ease-in-out;
  }

  @keyframes openIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
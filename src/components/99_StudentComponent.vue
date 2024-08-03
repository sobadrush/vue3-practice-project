

<template>
  <div style="padding: 1em 1em;">
    <h1 style="color: cadetblue;">StudentComponent</h1>
    <hr/>
    
    <h4 style="color: tomato;">計算學生人數</h4>
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text">{{ myData1 }}</span>
      </div>
      <input type="text" class="form-control" v-bind:value="numOfStudent"/>
    </div>
  </div>

</template>

<script setup lang="ts">
  import { computed, onMounted } from "vue";
  
  // 父層傳遞的資料
  // ---------------------------------------------------
  // (Type-A): 陣列形式，使用較精簡
  // defineProps(['data1']);

  // (Type-B): 物件形式 (推薦, 可指定型別/給預設值)
  const props = defineProps({
    myData1: {
      String, // 自訂欄位名稱為 data1
      default: '我是預設值',
      required: true,
      validator: (value: string) => {
        return ['Duke', 'Harvard', 'Berkeley'].includes(value);
      }
    }
  });

  // ---------------------------------------------------

  onMounted(() => {
    console.log('%c[StudentComponent] mounted', 'color: cadetblue;');
    console.log(`%c[StudentComponent] mounted, myData1: ${props.myData1}`, "color: cadetblue;");
  })

  // Computed 根據學校名稱(props.myData1)，計算學生人數
  const numOfStudent = computed(() => {
    console.log('%c[StudentComponent] computed', 'color: cadetblue;');
    switch (props.myData1) {
      case 'Duke':
        return 100;
      case 'Harvard':
        return 200;
      case 'Berkeley':
        return 300;
      default:
        return 0;
    }
  })
</script>

<style scoped>
  
</style>
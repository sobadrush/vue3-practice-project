<template>
  <div>
    <h1 style="color: blue;">我是 PiniaComponent-1</h1>
    <hr/>

    <h4>counterStore: <b>{{ counterStore }}</b></h4>
    <h4>counterStore.count: <b style="color: red;">{{ counterStore.count }}</b></h4>
    <h4>counterStore.doubleCount: <b>{{ counterStore.doubleCount }}</b></h4>
    <h4>counterStore.cubicCount: <b>{{ counterStore.cubicCount() }}</b></h4>

    <button type="button" class="btn-sm btn-outline-info" 
        @click.prevent="() => counterStore.waitAndIcrement(3000)">點我測試 waitAndIcrement</button>
  </div>

  <hr/>
  <table class="table-sm table-striped" style="border: 1px solid black; padding: 5px;">
    <thead>
      <tr>
        <th>#</th>
        <th>Url</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in refDataList" :key="index">
        <td>{{ index + 1 }}</td>
        <td><a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.url }}</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import { useCounterStore } from "../../stores/counter";
  
  const counterStore = useCounterStore();
  
  onMounted(() => {
    counterStore.count++;
    counterStore.increment();
    // counterStore.waitAndIcrement(5000); // 每5秒執行
  });

  // 參考資料
  const refDataList = [
    { "url": 'https://youtu.be/LfWpPRId5N0?si=zYP307LIR5iy1JPT' }
  ];
</script>

<style scoped>
  b {
    color: rgb(45, 68, 198);
  }

  thead th{
    border: 1px solid black;
  }

  tbody tr td{
    border: 1px solid black;
  }
</style>
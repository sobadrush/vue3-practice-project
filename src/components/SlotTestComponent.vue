<template>
  <h1 style="color:tomato">Im SlotTestComponent(父組件)</h1>

  <SlotComponent1>
    <h5 style="background-color: bisque;">Hello From Father</h5>
    <img src="@/assets/images/Kirby-1.webp" alt="Kirby1" width="100" v-for="index in 3" :key="index"/>

    <template v-slot:namedSlot_1>
      <h5 style="color: cornflowerblue;">具名插槽 namedSlot_1 參數：Apple</h5>
      <button class="btn btn-sm btn-secondary">Click me 1</button>
    </template>

    <template #namedSlot_2>
      <h5 style="color: cornflowerblue;">具名插槽 namedSlot_2 參數：Book</h5>
      <button class="btn btn-sm btn-secondary">Click me 2</button>
    </template>

  </SlotComponent1>

  <br/>

  <SlotComponent2 :rawData="3.1415926">
    <template #slot2_A="{ myText }">
      我想吃：{{ myText }} <br/>
    </template>
  </SlotComponent2>

</template>

<script setup lang="ts">
  import SlotComponent1 from '@/components/SlotComponent-1.vue'
  import SlotComponent2 from '@/components/SlotComponent-2.vue'
</script>

<style scoped>

</style>
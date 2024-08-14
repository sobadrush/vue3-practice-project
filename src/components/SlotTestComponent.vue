<template>
  <h1 style="color:tomato">Im SlotTestComponent(父組件)</h1>

  <SlotComponent1>
    <!-- <h5 style="background-color: bisque;">Hello From Father</h5>
    <img src="@/assets/images/Kirby-1.webp" alt="Kirby1" width="100" v-for="index in 3" :key="index"/> -->
  </SlotComponent1>

  <br/>
  <SlotComponent2 />

</template>

<script setup lang="ts">
  import SlotComponent1 from '@/components/SlotComponent-1.vue'
  import SlotComponent2 from '@/components/SlotComponent-2.vue'
</script>

<style scoped>

</style>
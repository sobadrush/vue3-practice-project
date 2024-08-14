<template>
  <h1 style="color:tomato">Im SlotTestComponent</h1>


  <SlotComponent1 />
  <SlotComponent2 />
</template>

<script setup lang="ts">
  import SlotComponent1 from '@/components/SlotComponent-1.vue'
  import SlotComponent2 from '@/components/SlotComponent-2.vue'
</script>

<style scoped>

</style>
<template>
  <div style="border: 2px solid mediumslateblue;">
    <h1 style="color:mediumslateblue">Im SlotComponent-2 (子組件)</h1>
    <hr/>

    <!-- myText：傳遞給「父組件」的屬性 -->
    <slot name="slot2_A" myText="蘋果派">
      default value A
    </slot>

    <hr/>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const props = defineProps({
    rawData: {
      type: Number,
      default: 0 // Provide a default value here
    }
  })

  const originRawData = ref(props['rawData'])

  onMounted(() => {
    console.log('props:', props['rawData'])
  })

</script>

<style scoped>

</style>
<template>
  <div style="border: 2px solid darkolivegreen;">
    <h1 style="color:darkolivegreen">Im SlotComponent-1 (子組件)</h1>
    <hr/>

    <div style="border: 1px solid palevioletred; width: 30%; height: 10rem; margin: 5rem;" >
      子組件的插槽區(slot)<br/>
      <!-- <slot /> --> <!-- 插槽：類似在子組件挖洞 -->
      <slot><h4 style="color: brown;">我是 slot 預設值</h4></slot>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
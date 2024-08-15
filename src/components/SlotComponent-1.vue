<template>
  <div style="border: 2px solid darkolivegreen;">
    <h1 style="color:darkolivegreen">Im SlotComponent-1 (子組件)</h1>
    <hr/>

    <div style="border: 1px solid palevioletred; width: 40%; height: 12rem; margin: 3rem;" >
      子組件的【匿名插槽區】 Anonymous Slot<br/>
      <!-- <slot /> --> <!-- 插槽：類似在子組件挖洞 -->
      <slot><h4 style="color: brown;">我是 slot 預設值</h4></slot>
      <!-- <slot name="default"><h4 style="color: brown;">我是 slot 預設值</h4></slot> -->
    </div>

    <div style="border: 1px solid palevioletred; width: 40%; height: 12rem; margin: 3rem;" >
      子組件的【具名插槽區】Named Slot<br/>
      <slot name="namedSlot_1">
        <h4 style="color: burlywood;">我是 namedSlot_1 的預設值</h4>
      </slot>

      <br/>

      <slot name="namedSlot_2">
        <h4 style="color: burlywood;">我是 namedSlot_2 預設值</h4>
      </slot>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
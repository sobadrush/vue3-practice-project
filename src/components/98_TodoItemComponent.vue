<template>
  <div style="padding: 1rem; border: 1px solid black;">
    <h1>98_TodoItemComponent</h1>
    <hr />
    <button type="button" class="btn btn-outline-danger" @click="() => { num++; }">Add Num</button>
    <h5>num: {{ num }}</h5>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from "vue";

  const num = ref(0);

  // ------------------------------
  onBeforeMount(() => {
    console.log(`%c >>> onBeforeMount`, 'color: red');
  });

  onMounted(() => {
    console.log(`%c >>> onMounted`, 'color: orange');
  });

  onBeforeUpdate(() => {
    console.log(`%c >>> onBeforeUpdate`, 'color: yellow');
  });

  onUpdated(() => {
    console.log(`%c >>> onUpdated`, 'color: green');
  });

  onBeforeUnmount(() => {
    console.log(`%c >>> onBeforeUnmount`, 'color: skyBlue');
  });

  onUnmounted(() => {
    console.log(`%c >>> onUnmounted`, 'color: darkorchid');
  });
</script>

<style scoped></style>

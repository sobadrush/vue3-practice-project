<template>
  <div style="padding: 1rem; border: 1px solid black;">
    <h1 style="color:blue;">98_TodoListComponent</h1>
    <hr/>
    <button type="button" class="btn-lg btn-outline-secondary" @click="() => { toggleIsShow() }">
      切換 [TodoItemComponent] isShow 狀態
    </button>
    <br/>
    <h5>isShow: {{ isShow }}</h5>

    <!-- item 組件 -->
    <TodoItemComponent v-if="isShow"/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import TodoItemComponent from '../components/98_TodoItemComponent.vue';

  const isShow = ref(true);

  // 切換 isShow 狀態
  const toggleIsShow = () => {
    isShow.value = !isShow.value;
  }
</script>

<style scoped>

</style>
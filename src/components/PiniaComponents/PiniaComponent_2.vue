<template>
  <div>
    <h1 style="color: salmon2">我是 PiniaComponent-2</h1>
    <hr/>
    <div class="btn-area">
      <input type="text" placeholder="輸入待辦事項" v-model.lazy="myTodoItem" @input="validInput"/>
      <button type="button" class="btn btn-outline-primary" @click.prevent="(e) => addOneTodo(e)">新增待辦事項</button>
      <button type="button" class="btn btn-outline-primary" @click.prevent="removeOneTodo">移除待辦事項</button>
    </div>
    <div>
      <h5>todoStore.todos: <pre>{{ todoStore.todos }}</pre></h5>
      <h5>todoStore.getTodosWithEnglish: <pre>{{ todoStore.getTodosWithEnglish }}</pre></h5>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useTodoStore } from '@/stores/todo';

  const todoStore = useTodoStore();
  const myTodoItem = ref<string>('');

  // 新增待辦事項
  const addOneTodo = (e: MouseEvent) => {
    console.log('event:', e);
    console.log('event.target:', e.target);
    let item = myTodoItem.value;

    todoStore.addTodo(item);

    myTodoItem.value = ''; // 清空輸入框
  }

  // 移除待辦事項
  const removeOneTodo = (event: MouseEvent) => {
    console.log('event:', event);
    let idx: number = todoStore.todos.indexOf(myTodoItem.value);
    todoStore.removeTodo(idx)
  }

  // 驗證輸入
  const validInput = (event: any) => {
    console.log('event:', event);
    console.log('event.target:', event.target);
    console.log('event.target.value:', event.target.value);

    let val = event.target.value; // 透過 event 取得輸入值
    if (val.trim() === '' || val.trim() === ' ') {
      alert('不可輸入空白字元！');
      return;
    }
    if (val.trim() !== '') {
      myTodoItem.value = val;
    }
  }

  // 監聽 v-model: myTodoItem
  watch(myTodoItem, (newVal, oldVal) => {
    console.log('%coldVal: %s \nnewVal: %s', 'color:salmon', oldVal, newVal);
  });
</script>

<style scoped>
  pre {
    color:darkblue
  }
  div {
    border: 5px outset rgb(76, 19, 218);
    padding: 10px;
    margin: 10px;
  }

  .btn-area {
    border: 5px outset rgb(8, 138, 164);
    display: flex;
    justify-content: space-around;
  }
</style>
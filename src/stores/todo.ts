import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * * 定義 todo store
 * * 這個 store 有一個 todos 陣列，裡面存放待辦事項
 */
export const useTodoStore = defineStore('todo', () => {

  // 指定 todos 陣列的型別為字串陣列
  const todos = ref<string[]>([ 'Buy groceries', 'Read a book', 'Walk the dog' ])

  const addTodo = (todo: string) => {
    todos.value.push(todo)
  }

  const removeTodo = (index: number) => {
    todos.value.splice(index, 1)
  }

  return { todos, addTodo, removeTodo }
})
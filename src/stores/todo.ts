import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

/**
 * * 定義 todo store
 * * 這個 store 有一個 todos 陣列，裡面存放待辦事項
 */
export const useTodoStore = defineStore('todo', () => {

  // * 指定 todos 陣列的型別為字串陣列
  const todos = ref<string[]>([ '吃飯', '睡覺', '打球' ])

  /**
   * * 透過 computed 加工 todos 陣列，將每個待辦事項加上英文翻譯
   */
  const getTodosWithEnglish = computed(() => {
    return todos.value.map(item => {
        switch (item) {
          case '吃飯':
            return item + ' - eat'
          case '睡覺':
            return item + ' - sleep'
          case '打球':
            return item + ' - play ball'
        }
        return item;
    })
  })

  const addTodo = (todo: string) => {
    todos.value.push(todo)
  }

  const removeTodo = (index: number) => {
    if (index == -1) {
      alert('查無此資料')
      return
    }
    todos.value.splice(index, 1)
  }

  return { todos, addTodo, removeTodo, getTodosWithEnglish }
})
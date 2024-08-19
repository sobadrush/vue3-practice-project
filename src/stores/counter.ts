import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  // 增加 count 的值，預設增加 1
  const increment = (val = 1) => {
    count.value += val
  }
  
  // 計算 count 的 3 次方 (直接 return, 沒有回存 count)
  const cubicCount = () => {
    return count.value ** 3 // ** : 表示指數運算
  }

  // 等待 1 秒後增加 count 的值
  const waitAndIcrement = async (secs: number = 1000) => {
    setTimeout(() => {
      count.value += 10
    }, secs);
  }

  return { count, doubleCount, increment, cubicCount, waitAndIcrement }
})
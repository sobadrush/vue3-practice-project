<template>
  <div>
    <h1>TestComponent.vue</h1>
    <hr/>
    <h5>總價：{{ price * quantity }}</h5>
    <br/>
    <h5 style="color: green;">總價(呼叫 subtotalMethods)：{{ subtotalMethods() }}</h5>
    <h5 style="color: green;">總價(呼叫 subtotalMethods)：{{ subtotalMethods() }}</h5>
    <h5 style="color: green;">總價(呼叫 subtotalMethods)：{{ subtotalMethods() }}</h5>
    <br/>
    <h5 style="color: orange;">總價(呼叫 subtotalComputed)：{{ subtotalComputed }}</h5>
    <h5 style="color: orange;">總價(呼叫 subtotalComputed)：{{ subtotalComputed }}</h5>
    <h5 style="color: orange;">總價(呼叫 subtotalComputed)：{{ subtotalComputed }}</h5>
  </div>
  
  <hr/>

  <h4>🚩 email 驗證(Computed)</h4>
  <input type="email" v-model="email" placeholder="Email"/>
  <p v-if="!isEmailValid">Please enter a valid email address</p> isEmailValid: {{ isEmailValid }}
  
  <hr/>

  <h4>🚩 幣別轉換(Computed)</h4>
  <p>1 日幣 = 0.21 台幣</p>
  <div>台幣 <input type="text" v-model="twd"></div>
  <div>日幣 <input type="text" v-model="jpy"></div>

</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  let price:number = 99
  let quantity:number = 10

  const email = ref('abc@com.tw');
  let twd = ref(0.21)

  // 小記(method)
  const subtotalMethods = () => {
    console.log('%c methods: subtotalMethods', 'color: green');
    return price * quantity
  }

  // 小記(computed)
  const subtotalComputed = computed(() => { 
    console.log('%c computed: subtotalComputed', 'color: orange');
    return price * quantity
  })

  // 幣別轉換 (get, set 的型別要相同)
  const jpy = computed({
    get: () => {
      console.log('%c computed: jpy get', 'color: pink');
      return parseFloat((twd.value / 0.21).toFixed(3))
    },
    set: (val:number) => {
      console.log('%c computed: jpy set', 'color: pink');
      twd.value = parseFloat((val * 0.21).toFixed(3))
    }
  })

  // 驗證 email
  const isEmailValid = computed(() => {
    console.log("email.value:", email.value);
    return /^\S+@\S+\.\S+$/.test(email.value);
  });
</script>

<style scoped>

</style>

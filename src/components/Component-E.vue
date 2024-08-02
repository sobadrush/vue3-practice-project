<template>
  <h1>Component-E</h1>

  <hr/>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">輸入 msg1 (監聽基本型別)</span>
    </div>
    <input type="text" class="form-control" v-model="msg1">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">輸入 msg2 (監聽物件型別)</span>
    </div>
    <input type="text" class="form-control" v-model="msg2.greetingMsg">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">輸入 msg3 (監聽物件型別, 使用 watchEffect)</span>
    </div>
    <input type="text" class="form-control" v-model="msg3.greetingMsg">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">輸入 msg4 (動態變化 style)</span>
    </div>
    <input type="text" class="form-control" v-model="msg4.greetingMsg">
  </div>
  <p :style="dynamicStyle">{{ msg4.greetingMsg }}</p>
</template>

<script setup lang="ts">
  import { ref, watch, watchEffect } from 'vue';
  const msg1 = ref("Welcome");
  const msg2 = ref({ "greetingMsg": "Hello" });
  const msg3 = ref({ "greetingMsg": "Bonjour" });
  const msg4 = ref({ "greetingMsg": "" });

  const dynamicStyle = ref({ color: 'red', fontSize: '20px' });

  // 監聽 msg1 的變化(基本型別)
  watch(msg1, (newVal, oldVal) => {
    console.log(`msg1: oldVal: ${oldVal} → newVal: ${newVal}`);
  });

  // 監聽 msg2 的變化(物件型別)
  // deep: true 表示深度監聽，若是物件內部的屬性有變化，才會觸發
  // watch(msg2, (newVal, oldVal) => {
  //   console.log(`msg2: oldVal: ${JSON.stringify(oldVal)} → newVal: ${JSON.stringify(newVal)}`);
  // }, { deep: true });

  // 監聽 msg2 的變化(物件型別)
  watch(() => msg2.value.greetingMsg, // 監聽 msg2.value.greetingMsg 的變化，而不是 msg2 整個物件，這樣就不需要 deep: true
    (newVal, oldVal) => {
      console.log(`msg2: oldVal: ${JSON.stringify(oldVal)} → newVal: ${JSON.stringify(newVal)}`);
    }
  );

  // 監聽 msg3 的變化(物件型別, 使用 watchEffect)
  watchEffect(() => {
    console.log(`msg3: greetingMsg: ${msg3.value.greetingMsg}`);
  });

  // 監聽 msg4 的變化(動態變化 style)
  // 若 msg4.greetingMsg 的長度是偶數，則文字顏色為藍色，字體大小為 30px
  // 若 msg4.greetingMsg 的長度是奇數，則文字顏色為紅色，字體大小為 20px
  watch(() => msg4.value.greetingMsg,
    (newVal, oldVal) => {
      console.log(`msg4: oldVal: ${oldVal} → newVal: ${newVal}`);
      if (newVal.length % 2 === 0) {
        dynamicStyle.value = { color: 'blue', fontSize: '30px' };
      } else {
        dynamicStyle.value = { color: 'red', fontSize: '20px' };
      }
    }
  );
</script>

<style scoped>

</style>
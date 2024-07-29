<template>
  <div>
    <h1>Router Test Component</h1>
    <p>這是一個測試路由的組件</p>

    <p class="highlight_red">⏺ route.params: {{ route.params }}</p>
    <p class="highlight_green">⏺ route.query: {{ route.query }}</p>

    <button type="button" class="btn btn-outline-primary" @click.prevent="toAboutPage">to About Page</button>
    <button type="button" class="btn btn-outline-secondary" ref="toHomeBtn">to Home Page</button>
    <button type="button" class="btn btn-outline-dark" @click.prevent="go(-1)">goBack</button>

    <hr/>

    ⏺ router.options.history:<br/>
    <code>
      {{ router.options.history }}
    </code>

  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute(); // 取得當前路由資訊
  const router = useRouter(); // 進行路由導航

  const toHomeBtn = ref(); // 取得 toHomeBtn 按鈕

  onMounted(() => {
    console.log('toHomeBtn:', toHomeBtn.value);
    toHomeBtn.value.onclick = () => { // onMounted() 階段，綁定 toHomeBtn 按鈕的點擊事件
      router.push({ name: 'home' });
    }

    console.log('%c[RouterTestComponent] mounted! 組件已完成加載，允許存取html元素。', 'color: orange;');
    console.log('route.params:', route.params);
    console.log('route.query:', route.query);
  });

  // 跳轉到 About 頁面
  const toAboutPage = () => {
    // router.replace({ name: 'about' }); // replace() 方法不會留下歷史記錄
    router.push({ name: 'about' }); // push() 方法會留下歷史記錄
  };

  // 返回上一頁 or 前往下一頁
  const go = (n: number) => {
    console.log('go:', n);
    router.go(n);
  };
</script>

<style scoped>
  .highlight_red {
    color: red;
  }

  .highlight_green {
    color: green;
  }

  button {
    margin-right: 10px;
  }
</style>
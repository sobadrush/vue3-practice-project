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

    <button type="button" class="btn btn-outline-success" @click.prevent="toRouterTestComponent">測試 onBeforeRouteUpdate</button>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">輸入電話號碼，沒輸入無法跳轉</span>
      </div>
      <input type="text" v-model="phoneNumber" class="form-control" placeholder="電話號碼"/>
    </div>

    <hr/>

    ⏺ router.options.history:<br/>
    <code>
      {{ router.options.history }}
    </code>

    <hr/>
    <h3>【動態路由】v-for + js 模板插值 + 路由</h3>
    <div style="border: 1px solid black;">
      <ul>
        <li v-for="ii in 5" v-bind:key="ii">
          <router-link :to="`/users/${ii}`">To Users Page - {{ ii }}</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
  
  const route = useRoute(); // 取得當前路由資訊
  const router = useRouter(); // 進行路由導航

  const toHomeBtn = ref(); // 取得 toHomeBtn 按鈕
  const phoneNumber = ref(''); // 使用 ref() 宣告 phoneNumber 變數

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

  // onBeforeRouteUpdate：只有同一個路由組件的實例被重用（通過路由參數的變化）時，才會調用它
  // 每次帶入不同的 userId，才會觸發 onBeforeRouteUpdate
  const toRouterTestComponent = () => {
    let userId = (() => {
      let rand = Math.floor(Math.random() * 90) + 10
      console.log('rand:', rand);
      return rand;
    })();
    router.replace({ path: `/testRouter/${userId}` }); // replace() 方法不會留下歷史記錄
  }

  // 作用時機：當路由參數發生變化時，觸發 onBeforeRouteUpdate() 方法
  onBeforeRouteUpdate((to, from, next) => {
    console.log('%c[RouterTestComponent] 執行 onBeforeRouteUpdate', 'color: yellow;');
    console.log('to:', to);
    console.log('from:', from);
    if (phoneNumber.value === '') {
      alert('請輸入電話號碼');
      next(false);
    }
    next();
  });
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
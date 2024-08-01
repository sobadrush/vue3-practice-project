<template>
  <h1>I'm UsersComponent - {{ queryUserId }}</h1>
  <div style="width: 50%; margin-left: 0;">
    <table class="table-sm table-striped table-hover table-bordered">
      <thead>
        <tr class="table-info">
          <th>#</th>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vv, kk, idx) in userInfo" :key="kk">
          <td>{{ idx + 1 }}</td>
          <td>{{ kk }}</td>
          <td :class="{ highlight_red: (vv == queryUserId) }">{{ vv }}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute(); // 取得當前路由資訊
  const userInfo = ref({}); // 使用 ref() 宣告 userInfo 變數

  onMounted(() => {
    console.log('%c[UsersComponent] mounted! 組件已完成加載，允許存取html元素。', 'color: orange;');
    console.log('route.params:', route.params);
    console.log('route.query:', route.query);

    // 拿 userId ，查詢 jsonplaceholder Users API
    console.log('queryUserId:', queryUserId.value);
    
    fetchUserById(Number(queryUserId.value));
  });

  // 作用時機：當路由參數發生變化時，觸發 computed() 方法
  const queryUserId = computed(() => {
    console.log('%c[UsersComponent] computed', 'color: orange;');
    return route.params.userId;
  })

  // 取得 jsonplaceholder Users API
  const fetchUserById = async (_userID: Number) => {
    console.log('fetchUserById _userID:', _userID);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${_userID}`);
    userInfo.value = await response.json();
  }
</script>

<style scoped>
  .highlight_red {
    font-size: larger;
    color: red;
  }
</style>
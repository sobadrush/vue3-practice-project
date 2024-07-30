<template>
    <h1>Component-C</h1>
    <hr/>
    <button type="button" @click.prevent="switchShowPic1" class="btn-lg btn-outline-primary">v-if 顯示圖片 ({{ showPicIndex }})</button>
    <button type="button" @click.prevent="switchShowPic2" class="btn-lg btn-outline-primary">v-show 顯示圖片 ({{ isShowPic }})</button>
    
    <div id="container-1" v-if="showPicIndex === 1">
      v-if <br/>
      <img src="@/assets/images/DeadPool-Female.jpeg"/>
    </div>
    <div id="container-2" v-else-if="showPicIndex === 2">
      v-if <br/>
      <img src="@/assets/images/DeadPool.jpeg"/>
    </div>
    <div id="container-3" v-else>
      v-if <br/>
      <img src="@/assets/images/DeadPool-Wolf.jpg"/>
    </div>

    <div id="container-4" v-show="isShowPic">
      v-show
      <img src="@/assets/images/FireMan-Johnny.png"/>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const showPicIndex = ref(1);
  const isShowPic = ref(true);

  const switchShowPic1 = () => {
    showPicIndex.value = showPicIndex.value % 3 + 1;
  }

  const switchShowPic2 = () => {
    isShowPic.value = !isShowPic.value;
  }

</script>

<style scoped>
  #container-1, #container-2, #container-3, #container-4 {
      border: 1px solid #000;
      background-color: #f0f0f0;
      padding: 10px;
      margin: 10px;
      font-size: 2em;
      text-align: center;
  }

  button {
      margin: 10px;
  }

  img {
      width: 90%;
      height: auto;
  }
</style>
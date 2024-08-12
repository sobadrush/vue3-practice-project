<template>
  <div style="border: 2px dashed blue;">
    <h1>Component-G (子組件)</h1>
    <hr/>
    <section>
      <component :is="myIcons[propsFromParents.p_iconName]" :p_scale="4"></component>
    </section>
    <section>
      <textarea v-show="p_content != null" cols="30" rows="10" placeholder="父組件有傳遞資料，才會顯示 textarea 哦！" :value="p_content"></textarea>
      <button v-show="p_isShowBtn" type="button" class="btn btn-lg btn-dark">click me</button>
    </section>
  </div>
</template>

<script setup lang="ts">
  import IconCommunity from '@/components/icons/IconCommunity.vue';
  import IconDocumentation from '@/components/icons/IconDocumentation.vue';
  import IconEcosystem from '@/components/icons/IconEcosystem.vue';
  import IconSupport from '@/components/icons/IconSupport.vue';
  import IconTooling from '@/components/icons/IconTooling.vue';

  const propsFromParents = defineProps(['p_iconName', 'p_content', 'p_isShowBtn']);

  console.log('propsFromParents:', propsFromParents.p_iconName);
  
  const myIcons: { [key: string]: any } = {
    "community": IconCommunity,
    "documentation": IconDocumentation,
    "ecosystem": IconEcosystem,
    "support": IconSupport,
    "tooling": IconTooling
  };
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
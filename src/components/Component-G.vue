<template>
  <div style="border: 2px dashed blue;">
    <h1>Component-G (子組件)</h1>
    <hr/>
    <section>
      <component :is="myIcons[propsFromParents.p_iconName]" :p_scale="4"></component>
    </section>
  </div>
</template>

<script setup lang="ts">
  import IconCommunity from '@/components/icons/IconCommunity.vue';
  import IconDocumentation from '@/components/icons/IconDocumentation.vue';
  import IconEcosystem from '@/components/icons/IconEcosystem.vue';
  import IconSupport from '@/components/icons/IconSupport.vue';
  import IconTooling from '@/components/icons/IconTooling.vue';

  const propsFromParents = defineProps(['p_iconName']);

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

</style>
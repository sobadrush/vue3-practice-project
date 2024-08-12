<template>
  <div style="border: 0.3rem dotted orange; padding: 0.5rem;">
    <h1>Component-F (父組件)</h1>
    <hr/>
    
    <!-- 
      "community": IconCommunity,
      "documentation": IconDocumentation,
      "ecosystem": IconEcosystem,
      "support": IconSupport,
      "tooling": IconTooling 
    -->
    <ComponentG :p_iconName="'tooling'"/>
  </div>

</template>

<script setup lang="ts">
  import ComponentG from '../components/Component-G.vue';
</script>

<style scoped>

</style>
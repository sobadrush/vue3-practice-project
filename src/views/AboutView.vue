<template>
  
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <CommunityIcon />
  <DocumentationIcon />
  <ToolingIcon />
  <EcosystemIcon />
  <SupportIcon />

  <br/>
  <img src="@/assets/images/DeadPool.jpeg"/>

</template>

<script setup lang="ts">
  import CommunityIcon from '@/components/icons/IconCommunity.vue'
  import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
  import ToolingIcon from '@/components/icons/IconTooling.vue'
  import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
  import SupportIcon from '@/components/icons/IconSupport.vue'
</script>

<style scoped>

</style>

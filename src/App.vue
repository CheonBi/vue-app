<template>

  <BaseHeader/>
  <div id="main_wrapper">
    <RouterView/>
  </div>
  <BaseFooter/>

</template>

<script setup>
import BaseFooter from './components/BaseFooter.vue';
import BaseHeader from './components/BaseHeader.vue';

</script>

<style lang="scss">
  /*
    @import '@/assets/scss/global: .scss;'
  */
</style>

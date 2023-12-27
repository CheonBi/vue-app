<template>

  <baseHeader/>
  <div id="main_wrapper">
    <RouterView/>
  </div>
  <baseFooter/>

</template>

<script setup>

import baseHeader from './components/Base/baseHeader.vue';
import baseFooter from './components/Base/baseFooter.vue';


</script>

<style lang="scss">
  /*
    @import '@/assets/scss/global: .scss;'
  */
</style>

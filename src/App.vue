<template>


<RouterView name="head"/>

<div id="main_wrapper">
  <RouterView/>
</div>

<RouterView name="foot"/>



</template>

<script setup>

// import baseHeader from './components/Base/commonHeader.vue';
// import baseFooter from './components/Base/commonFooter.vue';
import { RouterView } from 'vue-router';


</script>

<style lang="scss">
  /*
    @import '@/assets/scss/global: .scss;'
  */
</style>

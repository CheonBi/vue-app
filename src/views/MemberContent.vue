<template>
  <div class="content">
    <div class="main">
      <CustomWelcome :name="name" @update:emitValue="newName"/>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import CustomWelcome from '../components/MemberContent/CustomWelcome.vue';

const name = ref("Seria")

const newName = (e) =>{
  name.value = e.value;
};

</script>
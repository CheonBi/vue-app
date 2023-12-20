<template>
    <div>
        {{ test() }}
    </div>

</template>
  
<script setup>

import { ref, onMounted } from 'vue';


function api(){
    const rs = this.msg;
    console.log(rs);
    return rs;
}

function test(){
    this.axios
    const t = ref(10);
    return t;
}

onMounted(() => {
    api()
})

</script>
  
<style>
  
</style>
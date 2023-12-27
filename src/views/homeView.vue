<template>
    <div>
        {{ plt }}
    </div>

</template>
  
<script setup>
import { ref, onMounted, inject} from 'vue';

const plt = ref(" ");

function api(){
    const axios = inject('axios');
    let welcome = axios.get("/api/users")
        .then((res) => {
            plt.value = res.data;
        })
        .catch((res) =>{
            plt.value = "Check API Connection"
        });
}

function test(){
    const t = ref(10);
    return t;
}

onMounted(() => {
    api()
})

</script>
  
<style>
  
</style>
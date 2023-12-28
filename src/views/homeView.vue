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
    let welcome = axios.get("/api/users");
    welcome
        .then((res) => {
            plt.value = res.data;
        })
        .catch((res) =>{
            plt.value = res.data;
        });
    return welcome
}

onMounted(() => {
    api()
})

</script>
  
<style>
  
</style>
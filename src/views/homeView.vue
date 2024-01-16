<template>
    <div id="home">
        {{ plt }}
    </div>

    <div id="home">
        {{ plt }}
    </div>

</template>
  
<script setup>
import { ref, onMounted, inject} from 'vue';

const plt = ref(" ");

function api(){
    const axios = inject('$axios');
    let welcome = axios.post("/api/users");
    welcome
        .then((res) => {
            plt.value = res;
        })
        .catch((res) =>{
            plt.value = res;
        });
    return welcome
}

onMounted(() => {
    api()
})

</script>
  
<style>
#home{
    flex: 1;
}
</style>
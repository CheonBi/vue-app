<template>
    <div class="performance-tab">
        <div class="performance-content">
            <div class="chart-wrap">
                {{ props.data}}
                <canvas id="my" width="100%" height="100%">
                   
                </canvas>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, computed, isRef } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps(['data']);

const data = ref([
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
])

const test = computed(() => {
    if(props.data.length > 0){
        data.value[0].count = props.data[0].dataName2
        return data;
    } else  {
        return data;
    }
})

function res(){
    console.log('t')
}

// new Chart(
//         document.getElementById("my"),
//         {
//         type: 'line',
//         data: {
//             labels: data.value.map(row => row.datetime),
//             datasets: [
//             {
//                 label: 'Acquisitions by year',
//                 data: data.value.map(row => row.dataName1)
//             }
//             ]
//         },

//         options:{
//             scales:{
//                 x:{
//                     min: '00:00:00',
//                     max: '23:59:59',
//                     time:{
//                         displayFormats:{

//                         }
//                     }
//                 }
//             }
//         },
//         }
// )

onMounted(() => {
    
})

</script>


<style lang="scss" scoped>

.performance-tab, .performance-content{
    padding: 0 20px;
    color: var(--vt-c-black);
}
</style>
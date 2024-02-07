<template>
    <div class="performance-tab">
        <div class="performance-content">
            <canvas id="my">

            </canvas>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, computed, isRef, watch } from 'vue';
import { dailyDataProcess, drawChart} from '@/plugins/performanceViewchartAction.js'

const props = defineProps(['data']);
const data = ref([]);

var result;

watch(() => props.data, async(newData, oldData) =>{
    data.value = newData;
    result = dailyDataProcess(data.value)
    drawChart(result.dataArray, result.labels, 'my')
})

onMounted(() => {
    
})

</script>


<style lang="scss" scoped>

.performance-tab, .performance-content{
    min-height: inherit;
    min-width: inherit;
    padding: 0 20px;
    color: var(--vt-c-black);
}


</style>
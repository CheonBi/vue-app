<template>
    <div class="performance-tab">
        <div class="performance-content">
            <div class="chart-wrap">
                <canvas id="my">

                </canvas>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, computed, isRef, watch } from 'vue';
import { Chart } from 'chart.js/auto';
import { dailyDataProcess, drawChart} from '@/plugins/chartAction.js';
import 'chartjs-adapter-date-fns';

const props = defineProps(['data']);
const data = ref([]);

var result;

watch(() => props.data, async(newData, oldData) =>{
    data.value = newData.map((raw) => raw);
    result = dailyDataProcess(data.value)
    drawChart(result.dataArray, result.labels, 'my')
})

onMounted(() => {
    
})

</script>


<style lang="scss" scoped>

.performance-tab, .performance-content{
    padding: 0 20px;
    color: var(--vt-c-black);
}
</style>
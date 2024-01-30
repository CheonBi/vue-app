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
import 'chartjs-adapter-date-fns';

const props = defineProps(['data']);
const data = ref([]);
var chartData = [];
var chart;

watch(() => props.data, async(newData, oldData) =>{
    data.value = newData.map((raw) => raw);
    defineDataset(data.value);
})

function defineDataset(data){  
    chartData.length = 0;

    var labels = [];

    var chartStatus = Chart.getChart('my')
    if(chartStatus !== undefined){
        chartStatus.destroy();
    }

    var ctx = document.getElementById("my");

    if(data.length > 0){
        for(var i = 0; i<data.length; i++){

            labels.push(data[i].datetime);

            chartData.push({
                dataName1: data[i].dataName1,
                dataName2: data[i].dataName2,
                dataName3: data[i].dataName3,
                dataName4: data[i].dataName4,
                dataName5: data[i].dataName5,
            })
        }
    }

    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets:[
                {
                    label: 'dataName1',
                    data: chartData.map((x) => x.dataName1),
                    yAxisID: 'y2',
                },
                {
                    label: 'dataName2',
                    data: chartData.map((x) => x.dataName2),
                    yAxisID: 'y',
                },
                {
                    label: 'dataName3',
                    data: chartData.map((x) => x.dataName3),
                    yAxisID: 'y3',
                },
                {
                    label: 'dataName4',
                    data: chartData.map((x) => x.dataName4),
                    yAxisID: 'y2',
                },
                {
                    label: 'dataName5',
                    data: chartData.map((x) => x.dataName5),
                    yAxisID: 'y1',
                },
            ]

        },
        options:{
            locale: 'kr-ko',
            responsive: true,
            animation: false,
            spanGaps: 1000 * 60 * 60 * 24 * 1,
            elements:{
                point:{
                    pointStyle: false,
                },
                line: {
                    tension: 0.8
                }
            },

            plugins:{
                decimation:{
                    // enabled: true,
                    // algorithm: 'min-max'
                    
                }
            },

            scales:{
                x: {
                    type: 'time',
                    parsing : false,
                    time: {
                        unit: 'hour',
                        displayFormats: {
                            hour: 'HH:mm'
                        }
                    },

                    ticks:{
                        stepSize: 4,
                        autoSkip: false,
                        major : {
                            enabled : true,
                        },
                        font : function(context){
                            if(context.tick && context.tick.major){
                                return {
                                    weight: 'bold',
                                }
                            }
                        }
                    }
                },

                y: {
                    type: 'linear',
                    display: true,
                    position : 'left',
                    min : 20000,
                    max : 120000,
                    ticks:{
                        stepSize: 20000
                    }
                    
                },

                y1:{
                    type: 'linear',
                    display: true,
                    position : 'left',
                    min : 200,
                    max : 1200,
                    ticks:{
                        stepSize: 200
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                    
                },

                y2:{
                    type: 'linear',
                    display: true,
                    position : 'right',
                    min : 0,
                    max : 1000,
                    ticks:{
                        stepSize: 200
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                },

                y3:{
                    type: 'linear',
                    display:true,
                    position : 'right',
                    min : 1000,
                    max : 6000,
                    ticks:{
                        stepSize: 1000
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                },


            }
        }
    }

    chart = new Chart(ctx, config);
    return chart
}

onMounted(() => {
    
})

</script>


<style lang="scss" scoped>

.performance-tab, .performance-content{
    padding: 0 20px;
    color: var(--vt-c-black);
}
</style>
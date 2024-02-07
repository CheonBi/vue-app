import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

/*
PerformanceView 
*/

function dailyDataProcess(rawdata){

    var labels = [];
    var dataArray = [];

    if(rawdata.length > 0) {
        for(var i = 0; i<rawdata.length; i++){
            labels.push(rawdata[i].datetime);

            dataArray.push({
                dataName1: rawdata[i].dataName1,
                dataName2: rawdata[i].dataName2,
                dataName3: rawdata[i].dataName3,
                dataName4: rawdata[i].dataName4,
                dataName5: rawdata[i].dataName5,
            })
        }
    }

    return {labels, dataArray}
}

function drawChart(dataArray, labelArray, chartID){

    var chartStatus = Chart.getChart(chartID);
    if(chartStatus !== undefined){
        chartStatus.destroy();
    }

    var ctx = document.getElementById(chartID);

    var config = {
        type: 'line',
        data: {
            labels: labelArray,
            datasets:[
                {
                    label: 'dataName1',
                    data: dataArray.map((x) => x.dataName1),
                    yAxisID: 'y2',
                },
                {
                    label: 'dataName2',
                    data: dataArray.map((x) => x.dataName2),
                    yAxisID: 'y',
                },
                {
                    label: 'dataName3',
                    data: dataArray.map((x) => x.dataName3),
                    yAxisID: 'y3',
                },
                {
                    label: 'dataName4',
                    data: dataArray.map((x) => x.dataName4),
                    yAxisID: 'y2',
                },
                {
                    label: 'dataName5',
                    data: dataArray.map((x) => x.dataName5),
                    yAxisID: 'y1',
                },
            ]

        },
        options:{
            locale: 'kr-ko',
            responsive: true,
            maintainAspectRatio: false,
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
                },
                
                legend:{
                    display: true,
                    position: 'bottom',
                    labels:{
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 20
                    }
                },
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
    new Chart(ctx, config);
}

export { dailyDataProcess, drawChart }




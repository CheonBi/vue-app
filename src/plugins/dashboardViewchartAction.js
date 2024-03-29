import 'chartjs-adapter-date-fns';
import { Chart } from 'chart.js/auto';

/*
    DashBoard MainChart
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
                dataName3: rawdata[i].dataName3A,
                dataName5: rawdata[i].dataName5,
                dataName6: rawdata[i].dataName6,
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
                    label: 'dataName3A',
                    data: dataArray.map((x) => x.dataName3),
                    yAxisID: 'y3',
                },
                {
                    label: 'dataName5',
                    data: dataArray.map((x) => x.dataName5),
                    yAxisID: 'y2',
                },
                {
                    label: 'dataName6',
                    data: dataArray.map((x) => x.dataName6),
                    yAxisID: 'y1',
                },
            ]

        },
        options:{
            locale: 'kr-ko',
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction:{
                intersect: true,
                mode: 'index'
            },
            spanGaps: 1000 * 60 * 60 * 24 * 1,
            elements:{
                point:{
                    pointStyle: 'circle',
                    radius: 1,
                    hoverRadius: 3,
                    hoverBorderWidth: 3,
                },
                line: {
                    tension: 0.8
                }
            },

            layout:{
                padding: {
                    top: 40,
                    bottom: 5,
                    right: 10,
                    left: 10,
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

                tooltip:{
                    position: 'nearest',
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
    new Chart(ctx, config);
}


/*
    Sub Chart
*/

function subDataProcess(subdata){
    var labels = [];
    var dataArray = [];

    if(subdata.length > 0) {
        for(var i = 0; i<subdata.length; i++){
            labels.push(subdata[i].label);

            dataArray.push({
                dataNameA: subdata[i].dataNameA,
                dataNameB: subdata[i].dataNameB,
                dataNameC: subdata[i].dataNameC,
            })
        }
    }
    return {labels, dataArray}
}

function drawSubChart(dataArray, labelArray, chartID){
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
                    label: 'dataNameA',
                    data: dataArray.map((x) => x.dataNameA),
                },
                {
                    label: 'dataNameB',
                    data: dataArray.map((x) => x.dataNameB),
                },
                {
                    label: 'dataNameC',
                    data: dataArray.map((x) => x.dataNameC),
                },
            ]

        },
        options:{
            locale: 'ko-kr',
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction:{
                intersect: true,
                mode: 'index'
            },
            elements:{
                point:{
                    pointStyle: 'circle',
                    radius: 1,
                    hoverRadius: 3,
                    hoverBorderWidth: 3,
                },
                line: {
                    tension: 0.8
                }
            },

            layout:{
                padding: {
                    top: 40,
                    bottom: 5,
                    right: 10,
                    left: 10,
                }
            },

            plugins:{
                decimation:{

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

                tooltip:{
                    position: 'nearest',
                }
                
            },

            scales:{
                x: {
                    type: 'linear',
                    ticks:{
                        
                    }
                },

                y: {
                    type: 'linear',
                    display: true,
                },
            }
        }
    }
    console.log(new Chart(ctx, config))

}

export { dailyDataProcess, drawChart, subDataProcess, drawSubChart}




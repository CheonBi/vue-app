import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

function dailyDataProcess(rawdata){

    var labels = [];
    var dataArray = [];

    if(rawdata.length > 0) {
        for(var i = 0; i<rawdata.length; i++){
            labels.push(rawdata[i].datetime);

            dataArray.push({
                dataName1: data[i].dataName1,
                dataName2: data[i].dataName2,
                dataName3: data[i].dataName3,
                dataName4: data[i].dataName4,
                dataName5: data[i].dataName5,
            })
        }
    }

}

function drawChart(dataArray, chartID){

    var chartStatus = Chart.getChart(chartID);
    if(chartStatus !== undefined){
        chartStatus.destroy();
    }

    var ctx = document.getElementById(chartID);

    var config = {
        type: 'line',
        data:{
            dataset: [
                {
                    label: 'dataName1',
                    data: dataArray.map((x) => x.dataName1)
                },
                {
                    label: 'dataName2',
                    data: dataArray.map((x) => x.dataName2)
                },
                {
                    label: 'dataName3',
                    data: dataArray.map((x) => x.dataName3)
                },
                {
                    label: 'dataName4',
                    data: dataArray.map((x) => x.dataName4)
                },
                {
                    label: 'dataName5',
                    data: dataArray.map((x) => x.dataName5)
                },
            ]
        },

        options:{
            scales:{
                x: {
                    type: 'time',
                    parsing:false,
                    time: {
                        unit: 'hour'
                    }
                }
            }
        }


    }
}




<template>
  <div class="box__wrapper__total"> 
    <div class="box__wrapper__row">
      <div class="box__wrapper__big">
        <div class="box__base big__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__big dash">
              <canvas id="my">

              </canvas>
          </div>
        </div>
      </div>
  
      <div class="box__wrapper__small">
        <div class="box__base small__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__small dash">
            Box inner content
          </div>
        </div>
      </div>
    </div>

    <div class="box__wrapper__row">
      <div class="box__wrapper__big">
        <div class="box__base big__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__big dash">
            Box inner content
          </div>
        </div>
      </div>
  
      <div class="box__wrapper__small">
        <div class="box__base small__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__small dash">
            Box inner content
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script setup>

import { ref, inject, onMounted, computed, isRef, watch } from 'vue';
import { dailyDataProcess, drawChart} from '@/plugins/dashboardViewchartAction.js';

const axios = inject("$axios")
const data = ref([])

var result;

function mainChartAxios(){
  axios.get("/dashboard/search-mainchart")
  .then((res) =>{
    console.log(res);
    data.value = res.data;
  })
  .catch((err) => {
    alert(err);
  })
}

watch(() => data.value, async(newData, oldData) =>{

    data.value = newData;
    console.log(data.value)
    result = dailyDataProcess(data.value)
    drawChart(result.dataArray, result.labels, 'my')
})

onMounted(() => {
  mainChartAxios();
})

</script>

<style>

.chart-wrap{
  flex: 1;
}

#my{
  flex:1;
}

</style>
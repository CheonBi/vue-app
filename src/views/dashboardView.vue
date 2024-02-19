<template>
  <div class="box__wrapper__total"> 
    <div class="box__wrapper__row">
        <div class="box__base big__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__big dash">
            <canvas id="main"/>
          </div>
        </div>

        <div class="box__base small__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__small dash">

          </div>
        </div>
    </div>

    <div class="box__wrapper__row">
        <div class="box__base big__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__big">
            <div class="tabular">
              <div class="tabular-row">
                <div class="tabular-content">
                  <div class="content-left">
                    <div class="realtime-title">제목 Dummy</div>
                    <div class="realtime-wrap">
                      <div class="realtime-value">12354.2</div>
                      <div class="realtime-unit">Dummy Unit</div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="detail-value">max: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                    <div class="detail-value">min: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                  </div>
                </div>

                <div class="tabular-content">
                  <div class="content-left">
                    <div class="realtime-title">제목 Dummy</div>
                    <div class="realtime-wrap">
                      <div class="realtime-value">12354.2</div>
                      <div class="realtime-unit">Dummy Unit</div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="detail-value">max: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                    <div class="detail-value">min: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                  </div>
                </div>
                <div class="tabular-content">
                  <div class="content-left">
                    <div class="realtime-title">제목 Dummy</div>
                    <div class="realtime-wrap">
                      <div class="realtime-value">12354.2</div>
                      <div class="realtime-unit">Dummy Unit</div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="detail-value">max: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                    <div class="detail-value">min: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                  </div>
                </div>
              </div>

              <div class="tabular-row">
                <div class="tabular-content">
                  <div class="content-left">
                    <div class="realtime-title">제목 Dummy</div>
                    <div class="realtime-wrap">
                      <div class="realtime-value">12354.2</div>
                      <div class="realtime-unit">Dummy Unit</div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="detail-value">max: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                    <div class="detail-value">min: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                  </div>
                </div>

                <div class="tabular-content">
                  <div class="content-left">
                    <div class="realtime-title">제목 Dummy</div>
                    <div class="realtime-wrap">
                      <div class="realtime-value">12354.2</div>
                      <div class="realtime-unit">Dummy Unit</div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="detail-value">max: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                    <div class="detail-value">min: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                  </div>
                </div>
                <div class="tabular-content">
                  <div class="content-left">
                    <div class="realtime-title">제목 Dummy</div>
                    <div class="realtime-wrap">
                      <div class="realtime-value">12354.2</div>
                      <div class="realtime-unit">Dummy Unit</div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="detail-value">max: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                    <div class="detail-value">min: 123456</div>
                    <div class="detail-time">12 : 12 : 12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box__base small__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              차트 제목은 아직 정해지지 않았습니다.
            </div>
          </div>
          <div class="box__content__small dash">
            <canvas id="sub"/>
          </div>
        </div>
    </div>
  </div>
    
</template>

<script setup>

import { ref, inject, onMounted, computed, isRef, watch } from 'vue';
import { dailyDataProcess, drawChart , subDataProcess, drawSubChart} from '@/plugins/dashboardViewchartAction.js';

const axios = inject("$axios")
const data = ref([])
const sub = ref([])

var result1;
var result2;


function mainChartAxios(){
  axios.get("/dashboard/realtime/main")
  .then((res) =>{
    data.value = res.data;
  })
  .catch((err) => {
    alert(err);
  })
}

function subChartAxios(){
  axios.get("/dashboard/realtime/sub")
  .then((res) =>{
    sub.value = res.data;
  })
  .catch((err) => {
    alert(err);
  })
}

watch(() => data.value, async(newData, oldData) => {
    data.value = newData;
    result1 = dailyDataProcess(data.value)
    drawChart(result1.dataArray, result1.labels, 'main')
})

watch(() => sub.value, async(newData, oldData) => {
    sub.value = newData;
    result2 = subDataProcess(sub.value)
    drawSubChart(result2.dataArray, result2.labels, 'sub')
})

onMounted(() => {
  mainChartAxios();
  subChartAxios();
})

</script>

<style>

.chart-wrap{
  flex: 1;
}

#main, #sub{
  max-height: 100%;
  max-width: 100%;
}



</style>
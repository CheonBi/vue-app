<template>
  <div class="box__wrapper__total">
    <div class="box__wrapper__row chartA">
      <div class="box__wrapper__big">
        <div class="box__title">
          <div class="tabs">
            <ul>
              <li v-for="tab in tabs" :key="tab.views" style="cursor: pointer;" :class="{ active: tab.views === activeTab }"
                @click="changeTab(tab.views)">
                <a class="tab_title">
                  <span> {{ tab.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="box__base big__box">
          <div class="box__content__big">
            <div class="datepicker">
              <div class="date">
                <VueDatePicker v-model="Fromdp" 
                :enable-time-picker="false"
                :max-date="new Date()"
                :locale="locale"/>
              </div>

              <div class="date">
                <VueDatePicker v-model="Todp"
                :enable-time-picker="false"
                :min-date="Fromdp"
                :max-date="maxDate"
                prevent-min-max-navigation
                :locale="locale"/>
              </div>

              <button class="today" @click="todayPerformance">
                금일
              </button>

              <!-- <button class="search">

              </button> -->
            </div>
            <div class="con">
              <KeepAlive>
                <component :is="activeTab" v-bind:axiosRes="tabs">{{performance}}</component>
              </KeepAlive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { shallowRef, ref, reactive, onMounted, inject, computed } from 'vue';
import { addDays, addMonths, getYear, getMonth, getDay} from 'date-fns';
import chartTab from '../components/performanceView/chartTab.vue';
import tableTab from '../components/performanceView/tableTab.vue';

const activeTab = shallowRef(chartTab);

// datepicker`s refs
const Fromdp = ref();
const Todp = ref();
const locale = ref('ko');

const performance = ref();
const axios = inject('$axios');

// Array of Tabs Title & active component
const tabs = [
  {
    title: "chart",
    views: chartTab,
  },
  {
    title: "table",
    views: tableTab,
  },
]

function changeTab(tab) {
  activeTab.value = tab;
}

// Configure Datepicker enable date
const maxDate = computed(() => {
  if(addDays(new Date(getYear(Fromdp.value), getMonth(Fromdp.value), getDay(Fromdp.value)), 30) > new Date()){
    return new Date();
  } else {
    return addDays(new Date(getYear(Fromdp.value), getMonth(Fromdp.value), getDay(Fromdp.value)), 30);
  }
});


/* Request performances data from server */
function todayPerformance() {

  // if(Fromdp.value === null || Todp.value === null){
  //   return "Disable period"
  // }

  // let period = {
  //   start_ld : Fromdp.value,
  //   end_ld: Todp.value
  // }

  let welcome = axios.post("/api/users");
    welcome
        .then((res) => {
          performance.value = res;
        })
        .catch((res) =>{
          performance.value = res;
        });
    return welcome

  // let performances = axios.post("performance/date", period)
  //   .then((res) =>{
  //     performance.value = res;
  //   })
  //   .catch((res) => {
  //     performance.value = res;
  //   })
}



onMounted(() => {

})

</script>

<style>

</style>
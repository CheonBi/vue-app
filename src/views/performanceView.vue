<template>
  <div class="box__wrapper__total">
    <div class="box__wrapper__row chartA">
      <div class="box__wrapper__big">
        <div class="box__title">
          <div class="tabs">
            <ul>
              <li v-for="tab in tabs" :key="tab.views" style="cursor: pointer;"
                :class="{ active: tab.views === activeTab }" @click="changeTab(tab.views)">
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
                  :format="dateformat"
                  prevent-min-max-navigation 
                  :locale="locale" />
              </div>

              <div class="date">
                <VueDatePicker v-model="Todp"
                  :enable-time-picker="false"
                  :min-date="Fromdp" 
                  :max-date="to_maxDate"
                  :format="dateformat" 
                  prevent-min-max-navigation 
                  :locale="locale" />
              </div>

              <button class="today" @click="todayPerformance">
                금일
              </button>

              <button class="search" @click="periodPerformance">
                검색
              </button>

            </div>
            <div class="con">
              <KeepAlive>
                <component :is="activeTab" v-bind:axiosRes="performanceResponse"></component>
              </KeepAlive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { shallowRef, ref, onMounted, inject, computed, watch } from 'vue';
import { getYear, getMonth, getDate } from 'date-fns';
import { addDays, subDays } from 'date-fns';
import chartTab from '../components/performanceView/chartTab.vue';
import tableTab from '../components/performanceView/tableTab.vue';

const axios = inject('$axios');

const activeTab = shallowRef(chartTab);

// datepicker`s refs
const Fromdp = ref();
const Todp = ref();

const locale = ref('ko');
const performance = ref("");
const dateformat = ref("yyyy-MM-dd")

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

const tabData = ref({
  chartTab : Array,
  tableTab : Array
})

function changeTab(tab) {
  activeTab.value = tab;
}

// Configure Datepicker enable date

const from_minDate = computed(() => {
  return subDays(new Date(getYear(Todp.value), getMonth(Todp.value), getDate(Todp.value)), 30)
})

const from_maxDate = computed(() => {
  if (new Date() > Todp) {
    return Todp.value
  } else {
    return new Date();
  }
})

const to_maxDate = computed(() => {
  if (addDays(new Date(getYear(Fromdp.value), getMonth(Fromdp.value), getDate(Fromdp.value)), 30) > new Date()) {
    return new Date();
  } else {
    return addDays(new Date(getYear(Fromdp.value), getMonth(Fromdp.value), getDate(Fromdp.value)), 30);
  }
});

/* Request performances data from server */
function todayperformanceChart(){
  return axios.post("performance/search-daily-chart", {today: new Date()})
}

function todayperformanceTable(){
  return axios.post("performance/search-daily-table", {today: new Date()})
}

function todayPerformance(){
  Promise.all([todayperformanceChart(), todayperformanceTable()])
  .then((res) => {
    tabData.value.chartTab = res[0].data
    tabData.value.tableTab = res[1].data
  })
}

const performanceResponse = computed(() => {
  return tabData.value[activeTab.value["__name"]]
})




function periodPerformance() {
  if (Fromdp.value == null || Todp.value == null) {
    alert("Invalid Period!")
    return;
  }

  let period = {
    start_ld: Fromdp.value,
    end_ld: Todp.value
  }

  let performances = axios.post("performance/search-period-chart", period)
    .then((res) => {
      performance.value = res.data;
    })
    .catch((res) => {
      performance.value = res.data;
    })

  return performance

  return 1;
}



onMounted(() => {

})

</script>

<style></style>
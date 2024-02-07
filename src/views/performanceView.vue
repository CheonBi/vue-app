<template>
  <div class="container">
    <ul class="tabs">
      <li v-for="tab in tabs" :key="tab.views" style="cursor: pointer;"
        :class="{ active: tab.views === activeTab }" @click="changeTab(tab.views)">
           {{ tab.title }}
      </li>
    </ul>
    

        <div class="box__base performance">
            <div class="datepicker">
              <div class="date">
                <VueDatePicker v-model="Fromdp" 
                  :enable-time-picker="false"
                  :format="dateformat"
                  auto-apply
                  :locale="locale" />
              </div>

              <div class="date">
                <VueDatePicker v-model="Todp"
                  :enable-time-picker="false"
                  :format="dateformat" 
                  :min-date="minDay"
                  :max-date="new Date()"
                  prevent-min-max-navigation 
                  auto-apply
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
                <component :is="activeTab" :data="performanceResponse"></component>
              </KeepAlive>
            </div>
        </div>
  </div>
</template>

<script setup>

import { shallowRef, ref, onMounted, inject, computed} from 'vue';
import { getYear, getMonth, getDate } from 'date-fns';
import { addDays, subDays } from 'date-fns';
import chartTab from '../components/performanceView/chartTab.vue';
import tableTab from '../components/performanceView/tableTab.vue';

const axios = inject('$axios');
const activeTab = shallowRef(chartTab);

// datepicker`s refs
const Fromdp = ref(new Date());
const Todp = ref(new Date());

const locale = ref('ko-KR');
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

function changeTab(tab) {
  activeTab.value = tab;
}

//Data for Props
const tabData = ref({
  chartTab : [],
  tableTab : []
})

/*
  Configure Datepicker enable date

  subDays(new Date(getYear([date]), getMonth([date]), getDate([date])), [number])
  addDays(new Date(getYear([date]), getMonth([date]), getDate([date])), [number])

*/
const minDay = computed(()=>{
  return Fromdp.value;
})


/* Request Today performances */
function todayperformanceChart(){
  var period = {today_ld: new Date()} 
  return axios.post("performance/search-daily-chart", period);
}

function todayperformanceTable(){
  var period = {today_ld: new Date()} 
  return axios.post("performance/search-daily-table", period);
}

function todayPerformance(){
  Promise.all([todayperformanceChart(), todayperformanceTable()])
  .then((res) => {
    tabData.value.chartTab = res[0].data;
    tabData.value.tableTab = res[1].data;
  }).catch((err) => {
    alert(err)
  })
}

/* Request Period performances */
function periodPerformanceChart(){
  var period;
  period = {start_ld: Fromdp.value, end_ld: Todp.value}
  return axios.post("performance/search-period-chart", period);
}

function periodPerformanceTable(){
  var period;
  period = {start_ld: Fromdp.value, end_ld: Todp.value}
  return axios.post("performance/search-period-table", period);
}

function periodPerformance(){
  Promise.all([periodPerformanceChart(), periodPerformanceTable()])
  .then((res) => {
    console.log(res)
    tabData.value.chartTab = res[0].data;
    tabData.value.tableTab = res[1].data;
  }).catch((err) => {
    alert(err)
  })
}

/* Response transfer to props */
const performanceResponse = computed(() => {
  return tabData.value[activeTab.value["__name"]];
})


onMounted(() => {

})

</script>

<style lang="scss" scoped>

$circle-point: 0.25rem;
$margin-top-point: 5px;

ul.tabs{
  margin: $margin-top-point 5px 0px 5px;
  padding: 0px;
  list-style: none;

  li {
    width: 20rem;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 4.9rem;
    border-radius: 0.4rem 0.4rem 0 0;
    background-color: var(--color-background-blue-soft);
  }

  li.active {
    background-color: var(--vt-c-gray);
    box-shadow: 1px 1px 1px var(--color-shadow-gray);
  }

}
.performance {
  margin: 0px 5px 15px 5px;
  display: inherit;
  border-radius: 0 $circle-point $circle-point $circle-point;

  .datepicker {
    margin: 15px 0;
    padding: 1.5rem 4rem;
  }

  .con {
    color: var(--vt-c-black);
    padding: 0;
    min-height: 75vh;
  }
}

.date{
  display: inline-block;
  margin: 0px 2px;
  width: 200px;
  --dp-font-size: 1.4rem;
  --dp-font-family:       
    'Pretendard',
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif; 
}

button {
  margin: 0px 2px;
  background: #5E5DF0;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: calc(1.4rem * 1.5);
  padding: 7px 18px;
  user-select: none;
  border: 0;
}
</style>
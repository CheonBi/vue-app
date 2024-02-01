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



.date{
  width: 200px;
  --dp-font-size: 1.5rem;
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

  --dp-preview-font-size: 1.2rem;
  .dp__action_buttons{
    flex: 1;
  }
}




</style>
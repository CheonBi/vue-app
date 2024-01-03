<template>
  <div class="box__wrapper__total">
    <div class="box__wrapper__row chartA">
      <div class="box__wrapper__big">
        <div class="box__base big__box">
          <div class="box__title">
            <!-- <div class="icon"/>
            <div class="text">
              A Chart 페이지입니다.
            </div> -->
            <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :key="tab.views" 
                   style="cursor: pointer;" :class="{active: tab.views === activeTab}" 
                  @click="changeTab(tab.views)">
                  <a class="tab_title">
                    <span> {{tab.title}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="box__content__big">
            <div class="datepicker">
              datepicker
            </div>
            <div class="con">
              <KeepAlive>
                <component :is="activeTab">{{plt}}</component>
              </KeepAlive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { shallowRef, ref, onMounted, inject} from 'vue';
import chartTab from '../components/performanceView/chartTab.vue';
import tableTab from '../components/performanceView/tableTab.vue';
import interTab from '../components/performanceView/interTab.vue';

const plt = ref("");
const activeTab = shallowRef(interTab);

const tabs = [
  {
    title: "chart",
    views: chartTab
  },
  {
    title: "table",
    views: tableTab
  },
]

function api(){
    const axios = inject('axios');
    let welcome = axios.get("/api/users")
        .then((res) => {
            plt.value = res;
        })
        .catch((res) =>{
            plt.value = res;
        });
}

function changeTab(tab){
  activeTab.value = tab;
}

onMounted(() => {
    api()
})



</script>

<style lang="scss" scoped>

.chartA{
  flex: 1 1 100vh;
}

.datepicker{
  display: flex;
  margin: 5px 0;
  padding: 5px;
}

.big__box{
  padding: 0;
}

.box__content__big{
  padding: 5px;
}
.con{
  color: var(--vt-c-black);
  padding: 0 5px;
}

.tabs{
  ul{
    position:relative;
    padding: 0;
    list-style: none;
  }

  li{
    float: left;
    width: 10rem;

  }

  li span{
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.875;
    background-color: var(--color-background-blue);

  }

  li.active span{
    background-color: var(--vt-c-gray);
    border-radius: 5px 0 0 0;
  }

}
</style>
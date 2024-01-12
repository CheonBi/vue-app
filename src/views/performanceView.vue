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
              datepicker
            </div>
            <div class="con">
              <KeepAlive>
                <component :is="activeTab" v-bind:axiosRes="tabs"> </component>
              </KeepAlive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { shallowRef, ref, onMounted, inject } from 'vue';
import chartTab from '../components/performanceView/chartTab.vue';
import tableTab from '../components/performanceView/tableTab.vue';

const plt = ref("");
const activeTab = shallowRef(chartTab);
const activeBind = ref("");

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


function api() {
  const axios = inject('axios');
  let welcome = axios.get("/api/users")
    .then((res) => {
      plt.value = res;
    })
    .catch((res) => {
      plt.value = res;
    });
    return welcome;
}

function changeTab(tab) {
  activeTab.value = tab;
}

onMounted(() => {
  plt.value = api();
})

</script>

<style>

</style>
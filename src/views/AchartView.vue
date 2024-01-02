<template>
  <div class="box__wrapper__total">
    <div class="box__wrapper__row chartA">
      <div class="box__wrapper__big">
        <div class="box__base big__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              A Chart 페이지입니다.
            </div>
          </div>

          <div class="datepicker">
            datepicker
          </div>
          <div class="box__content__big">
            <nav>
              <ul>
                <li v-for="tab in tabs" :key="tab.id">
                  

                </li>
              </ul>
            </nav>

            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, inject, reactive} from 'vue';
import chartTab from '../components/performanceView/chartTab.vue';
import tableTab from '../components/performanceView/tableTab.vue';

const plt = ref(" ");
const activeTab = ref("");
const tabs = reactive([
  {
    title: "chart",
    views: "chartTab"
  },
  {
    title: "table",
    views: "tableTab"
  }
])

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

onMounted(() => {
    api()
    console.log(tabs)
})



</script>

<style lang="scss" scoped>

.chartA{
  flex: 1 1 100vh;
}

.datepicker{
  display: flex;
  background-color: beige;
  border-radius: 5px;
  margin: 5px 0;
  padding: 5px;
}

.box__content__big{
  background-color: white;
  border-radius: 5px;
  padding: 5px;
}

</style>
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
            {{ plt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, inject} from 'vue';

const plt = ref(" ");

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
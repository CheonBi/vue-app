<template>
  <div class="box__wrapper__total">
    <div class="box__wrapper__row chartB">
      <div class="box__wrapper__big">
        <div class="box__base big__box">
          <div class="box__title">
            <div class="icon"/>
            <div class="text">
              B Chart 페이지입니다.
            </div>
          </div>
          <div class="datepicker">
            datepicker
          </div>
          <div class="box__content__big">
            Box inner content
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.chartB{
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
<template>
  <table class="performance-content" border="0" cellpadding="0" cellspacing="0" summary="">
    <thead>
      <tr>
        <template v-for="(header, index) in performanceHeaders" :key="header.name">
          <th :rowspan="header.row" :colspan="header.col">
            {{ header.name }}
          </th>
        </template>
      </tr>
      <tr>
        <th v-for="(sub, index) in subperformanceHeaders" :key="sub">
          {{ sub }}
        </th>
      </tr>
    </thead>

    <tbody>
      {{ axiosRes }}
      <tr v-for="(v, index) in props.axiosRes" :key="v.title">
        
      </tr>
    </tbody>
    <!-- <span id="text" v-for="prop in props.axiosRes" :key="prop.id"> {{ prop.name }} </span> -->
  </table>
</template>

<script setup>
const props = defineProps(['axiosRes']);
const performanceHeaders = [
  {
    name: "Fusce",
    row: 2, col: 1,
  },
  {
    name: "laoreet",
    row: 2, col: 1,
  },
  {
    name: "iaculis",
    row: 2, col: 1,
  },
  {
    name: "arcu",
    row: 2, col: 1,
  },
  {
    name: "ac rutrum",
    row: 1, col: 3,
  },
  {
    name: "Vivamus",
    row: 2, col: 1,
  },
  {
    name: "Praesent",
    row: 2, col: 1,
  },
  {
    name: "tincidunt",
    row: 2, col: 1,
  },
]

const subperformanceHeaders = [
  "Quisque",
  "aliquam",
  "ante"
]

</script>

<style lang="scss" scoped>
.performance-content {
  padding: 0 40px;
  color: var(--vt-c-black);

  thead th {
    border-bottom: 0.2rem solid var(--tb-header-border);
    text-align: center;
    line-height: 3.8rem;
    font-weight: bold;
    color: var(--tb-header-text);
    background-color: var(--tb-header-background);
    font-size: 1.4rem !important;
  }

  thead th:nth-child(n):not(:nth-child(5)) {
    width: 18rem;
  }

  thead :nth-child(5) {
    width: 54rem;
  }

  tbody td{
    border-bottom: 1px solid var(--tb-body-border);
    text-align: center;
    font-size: 1.5rem;
    line-height: 4rem;
    color: var(--tb-body-text);
    background: var(--tb-body-background);
  }
}
</style>
<template>
  <div class="fixed-tbl">
  <table class="performance-content" border="0" cellpadding="0" cellspacing="0" summary="">
    <thead>
      <tr>
        <template v-for="(header, index) in performanceHeaders" :key="header.name">
          <th class="main-th" :rowspan="header.row" :colspan="header.col">
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
      <tr v-for="(v, index) in props.data" :key="v.title">
        <td>
          <span>{{ v.datetime }} </span>
        </td>

        <td>
          <span>{{ v.dataName1 }} </span>
        </td>

        <td>
          <span>{{ v.dataName2 }} </span>
        </td>

        <td>
          <span>{{ v.dataName4 }} </span>
        </td>

        <td>
          <span>{{ v.dataName3A }} </span>
        </td>

        <td>
          <span>{{ v.dataName3B }} </span>
        </td>

        <td>
          <span>{{ v.dataName3C }} </span>
        </td>

        <td>
          <span>{{ v.dataName5 }} </span>
        </td>

        <td>
          <span>{{ v.dataName6 }} </span>
        </td>

        <td>
          <span>{{ v.dataName7 }} </span>
        </td>

      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
const props = defineProps(['data']);
const performanceHeaders = [
  {
    name: "datetime",
    row: 2, col: 1,
  },
  {
    name: "dataName1",
    row: 2, col: 1,
  },
  {
    name: "dataName2",
    row: 2, col: 1,
  },
  {
    name: "dataName3",
    row: 2, col: 1,
  },
  {
    name: "dataName4",
    row: 1, col: 3,
  },
  {
    name: "dataName5",
    row: 2, col: 1,
  },
  {
    name: "dataName6",
    row: 2, col: 1,
  },
  {
    name: "dataName7",
    row: 2, col: 1,
  },
]

const subperformanceHeaders = [
  "dataName3A",
  "dataName3B",
  "dataName3C"
]

</script>

<style lang="scss" scoped>
$scroll-bar-width: 1rem;

.fixed-tbl{
  position: relative;
  width: 100%;
  max-height: 100vh;
}

.performance-content {
  /*

    padding 순서 : top right bottom left;
  */

  padding: 0px calc(40px - $scroll-bar-width) 0px 40px;
  color: var(--vt-c-black);

  table{
    width: 100%;
  }

  thead{
    display: table;
    width: calc(100% - ($scroll-bar-width));
  }

  tbody{
    display: block;
    max-height: 70rem;
    overflow-y: scroll;

    /*
      scrollbar design : -webkit-scrollbar
      webkit browser에서만 유효(크롬, 사파리 등)

      ::-webkit-scrollbar	-> 스크롤바 전체
      ::-webkit-scrollbar-thumb	-> 스크롤 막대
      ::-webkit-scrollbar-track	-> 스크롤 막대 외부

    */

    &::-webkit-scrollbar{
      width: $scroll-bar-width;
    }

    /*
      thumb와 track사이에 공간(padding)을 주고 싶을 때는 
      thumb의 background-clip을 padding-box로 설정하고, border 색상을 transparent(투명)으로 조절
    */

    &::-webkit-scrollbar-thumb{
      background-color: cyan;
      border-radius: 5px;
      background-clip: padding-box;
      border: 1px solid transparent;
    }

    &::-webkit-scrollbar-track{
      background-color: blanchedalmond;
      border-radius: 5px;
    }
  }

  thead th {
    border-bottom: 0.35rem solid var(--tb-header-border);
    text-align: center;
    line-height: 3.8rem;
    font-weight: bold;
    color: var(--tb-header-text);
    background-color: var(--tb-header-background);
    font-size: 1.7rem !important;
  }

  tbody td{
    border-bottom: 3px solid var(--tb-body-border);
    text-align: center;
    font-size: 1.55rem;
    line-height: 5.2rem;
    color: var(--tb-body-text);
    background: var(--tb-body-background);
  }

  thead th.main-th:nth-child(n):not(:nth-child(5)) {
    width: 18rem;
  }

  thead th.main-th:nth-child(5) {
    width: 54rem;
  }

  tbody td:nth-child(n){
    width: 18rem;
  }
}
</style>
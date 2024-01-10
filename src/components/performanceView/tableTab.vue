<template>
    <div class="performance-tab">
        <table class="performance-content" border="0" cellpadding="0" cellspacing="0" summary="">
            <thead>
                <tr v-for="header in performanceHeaders">
                    <th v-if="header.row === true" :rowspan="header.span">
                        {{ header.name }}
                    </th>
                </tr>
            </thead>
            <!-- <span id="text" v-for="prop in props.axiosRes" :key="prop.id"> {{ prop.name }} </span> -->
        </table>
    </div>

</template>

<script setup>

const props = defineProps(['axiosRes']);
const performanceHeaders = [
  {
    name: "Fusce",
    row: true,
    span: 2,
    id: 1,
  },
  {
    name: "laoreet",
    row: true,
    span: 2,
    id: 2,
  },
  {
    name: "iaculis",
    row: true,
    span: 2,
    id: 3,
  },
  {
    name: "arcu",
    row: true,
    span: 2,
    id: 4,
  },
  {
    name: "ac rutrum",
    row: false,
    span: 3,
    id: 5,
  },
  {
    name: "Vivamus",
    row: true,
    span: 2,
    id: 6,
  },
  {
    name: "Praesent",
    row: true,
    span: 2,
    id: 7,
  },
  {
    name: "tincidunt",
    row: true,
    span: 2,
    id: 8,
  },
]

</script>

<style lang="scss" scoped>
.performance-tab{
    border: 1px solid var(--color-border);
}

.performance-tab, .performance-content{
    color: var(--vt-c-black);
}

#text{
    display: block;
}

table tbody tr td{
    font-size: 1.5rem;
    color: #d0dcf7;
    background: #282f42;
}


</style>
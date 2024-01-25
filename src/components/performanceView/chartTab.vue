<template>
    <div class="performance-tab">
        <div class="performance-content">

        </div>
    </div>

</template>

<script setup>
const props = defineProps(['data'])

</script>


<style lang="scss" scoped>

.performance-tab{
    border: 1px solid var(--color-border);
}

.performance-tab, .performance-content{
    color: var(--vt-c-black);
}
</style>
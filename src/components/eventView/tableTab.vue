<template>
    <div class="performance-tab">
        <span></span>
        <div class="performance-content">
            
        </div>
    </div>

</template>

<script setup>

const props = defineProps(['axiosRes']);

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

</style>
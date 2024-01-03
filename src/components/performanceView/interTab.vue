<template>
    <div class="performance-tab">
        <slot></slot>
        <div class="performance-content">
            inter
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.performance-tab{
    border: 1px solid var(--color-border);
}

.performance-tab, .performance-content{
    color: var(--vt-c-black);
}
</style>
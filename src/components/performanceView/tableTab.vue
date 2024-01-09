<template>
    <div class="performance-tab">
        <slot></slot>
        <div class="performance-content">
            
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

/*
.performance-tab{
    color: #fff;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;  
}

.performance-content{
    color: #fff;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;  
}
*/
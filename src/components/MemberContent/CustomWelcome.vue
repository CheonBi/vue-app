<template>
    <div class="wel wrapper">
        <div class="wel inner">
            Welcome {{ name }}
        </div>

        <input type="text" :value="modelValue" @input="emitValue"/>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const member = defineProps({
    name: String,
})

const newName = defineEmits(['update:emitValue'])

const emitValue = (e) => {
    emits('update:emitValue', e);
}

</script>
<template>
    <header class="header">
        <h1 class="title">Page Title</h1>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="cat">Menu1</RouterLink>
                </li>

                <li>
                    <RouterLink to="dog">Menu2</RouterLink>
                </li>

                <li>
                    <RouterLink to="rabbit">Menu3</RouterLink>
                </li>
            </ul>
        </nav>
        
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>
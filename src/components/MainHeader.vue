<template>
    <header class="header__wrap">
        <div class="header__inner">
            <div class="menu">
                <h1 class="title">Page Title</h1>

                <nav>
                    <ul>
                        <li class="li__home">
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li class="li__menu">
                            <RouterLink to="member">Menu1</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>
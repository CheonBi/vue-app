<template>
    <div class="header_wrap">
        <div class="header_inner">
            <div class="header_name">
                In sagittis elit
            </div>
            <nav class="header_menu">
                <ul>
                    <li>
                        <RouterLink to="/dash">Overview</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/Achart">Performance</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/Bchart">ChartB</RouterLink>
                    </li>
    
                    <li>
                        <RouterLink to="/admin">Admin</RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="header_info">
                <div class="info_wrap">
                    <div class="user_id">
                        user id
                    </div>

                    <div class="cur_time">
                        current time size
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>
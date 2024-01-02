<template>
    <div class="header_wrap">
        <div class="header_inner">
            <div class="header_user info">
                <div class="info_wrap">
                    <!-- <div class="header_user_icon">
                        icon
                    </div> -->
                    <div class="header_user_id">
                        user id
                    </div>
                </div>
            </div>

            <div class="header_name">
                Page Logo with Link
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
        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>
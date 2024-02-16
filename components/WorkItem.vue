<script setup>
    defineProps(['date', 'img', 'to'])
</script>

<template>
    <div class="work-item" data-hide="true">
        <NuxtLink :to="to">
            <div style="line-height: 0; border-radius: 12px; overflow: hidden;"><img :src="img" draggable="false"></div>
            <div style="padding: 16px; box-sizing: border-box;">
                <h3><slot /></h3>
                <h4>{{ date }}</h4>
            </div>
        </NuxtLink>
    </div>
</template>

<style>
    .work-item {
        width: 100%;
    }

    .work-item img {
        width: 100%;
        aspect-ratio: 1.77;
        object-fit: cover;
        transition: transform 0.5s;
        user-select: none;
        -webkit-user-select: none;
    }

    .work-item:hover img {
        transform: scale(1.1);
    }
</style>
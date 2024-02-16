<script setup>
    defineProps(['subtitle'])
</script>

<template>
    <div class="section-name" data-hide="true">
        <img class="flip" src="/img/star.png" alt="" width="30">
        <div class="flip"></div>
        <h2 style="padding-bottom: 3px;">
            <slot />
            <div v-if="subtitle" :data-subtitle="subtitle"></div>
        </h2>
        <div></div>
        <img src="/img/star.png" alt="" width="30">
    </div>
</template>

<style>
    .section-name {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
    }

    .section-name > h2 > div {
        margin-bottom: -20px;
    }

    .section-name > h2 > div::after {
        content: attr(data-subtitle);
        padding: 0px 10px 0px 16px;
        letter-spacing: 6px;
        font-size: 12px;
    }
    
    .section-name > div {
        border-top: 1px solid var(--main-color);
        flex-grow: 1;
        transform-origin: left;
        transition: transform 1s;
    }

    .section-name[data-hide='true'] > div {
        transform: scaleX(0);
    }

    .section-name > div.flip {
        transform-origin: right;
    }
    
    .section-name > img {
        transition: transform 1s 0.3s, opacity 1s 0.3s;
    }

    .section-name[data-hide='true'] > img {
        transform: scale(1.5) rotate(-120deg);
        opacity: 0;
    }

    .section-name[data-hide='true'] img.flip {
        transform: scale(1.5) rotate(120deg);
    }

    @media (max-width: 800px) {
        .section-name {
            gap: 10px;
        }
        
        .section-name img {
            width: 20px;
        }
    }
</style>
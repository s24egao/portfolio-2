<script setup>
    defineProps(['to', 'target'])
</script>

<template>
   <NuxtLink :to="to" :target="target">
        <div class="button">
            <slot />
        </div>
    </NuxtLink>
</template>

<style>
    .button {
        color: var(--second-color);
        font: 900 12px Noto Sans TC;
        width: 125px;
        height: 30px;
        border-radius: 15px;
        outline: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        z-index: 0;
        text-transform: uppercase;
    }

    .big .button {
        width: 180px;
        height: 40px;
        border-radius: 20px;
        font-size: 18px;
    }

    .button::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--second-color);
        transition: clip-path 0.5s;
        mix-blend-mode: difference;
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
        border-radius: 20px;
        z-index: 1;
    }

    .button:hover::before {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .button::after {
        content: '';
        display: inline-block;
        border-top: 3px solid;
        border-right: 3px solid;
        width: 6px;
        height: 6px;
        margin-left: 6px;
        transform: translateX(0px) rotate(45deg);
        transition-duration: 0.3s;
    }

    .big .button::after {
        width: 10px;
        height: 10px;
        margin-left: 12px;
    }

    .button:hover::after {
        transform: translateX(6px) rotate(45deg);
    }
</style>
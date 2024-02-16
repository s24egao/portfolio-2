<script setup>
    const splashScreen = ref()

    onMounted(() => {
        setTimeout(() => splashScreen.value.remove(), 3000)
    })
</script>

<template>
    <div id="splash-screen" ref="splashScreen">
        <video autoplay loop muted playsinline disablepictureinpicture src="/img/logo.mp4" width="200"></video>
    </div>
</template>

<style>
    #splash-screen {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background: black;
        animation: splash-screen 0.5s 2.5s forwards;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes splash-screen {
        to { opacity: 0; transform: scale(1.5); }
    }
</style>
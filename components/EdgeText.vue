<script setup>
    defineProps(['left', 'right'])
</script>

<template>
    <div id="edge-text">
        <div style="left: 20px;">{{ left }}</div>
        <div style="right: 20px;">{{ right }}</div>
    </div>
</template>

<style>
    #edge-text div {
        position: fixed;
        top: calc(50% - 250px);
        height: 500px;
        text-align: center;
        writing-mode: vertical-lr;
        font: 400 12px Noto Sans TC;
        letter-spacing: 6px;
        color: var(--second-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }

    #edge-text div::before, #edge-text div::after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background: var(--second-color);
    }

    @media (max-width: 800px) { 
        #edge-text div {
            display: none;
        }
    }
</style>
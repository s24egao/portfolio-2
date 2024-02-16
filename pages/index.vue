<script setup>
    useSeoMeta({
        title: 'PROFILE - 木白',
        ogTitle: 'PROFILE - 木白',
        description: 'Illustrator / Developer',
        ogDescription: 'Illustrator / Developer'
    })
</script>

<template>
    <div>
        <section id="about">
            <img data-hide="true" src="/img/profile.png" alt="" width="200" style="border-radius: 100%; margin: 60px 0px;">
            <h1 data-hide="true">木白 | SHOW</h1>
            <h3 data-hide="true">Illustrator • Developer</h3>
            <br><br>
            <h4 data-hide="true">ABOUT</h4>
            <div data-hide="true">
                2003 年出生<br>
                對於繪畫、遊戲創作領域很有興趣<br>
                接觸過視覺設計、3D 建模和寫程式<br><br>
                在探索的過程中發現網頁設計可以結合自己所學<br>
                透過 Coding 打造出好看又好玩的內容<br>
                因而踏上了學習開發網站的道路
            </div>
            <div style="width: 100%; display: flex; flex-wrap: wrap; gap: 30px; margin: 80px 0px;">
                <Click data-hide="true" to="https://www.instagram.com/s24egao/" target="_blank">Instagram</Click>
                <Click data-hide="true" to="https://twitter.com/s24egao" target="_blank">Twitter</Click>
                <Click data-hide="true" to="https://www.pixiv.net/users/80929565" target="_blank">Pixiv</Click>
                <Click data-hide="true" to="https://github.com/s24egao" target="_blank">GitHub</Click>
            </div>
        </section>
    </div>
</template>

<style>
    #about {
        padding-left: 210px;
        position: relative;
        overflow: hidden;
    }

    #about::after {
        content: '';
        position: absolute;
        top: 0px;
        right: -300px;
        width: 1000px;
        height: 100%;
        background-image: url(/img/logo-stroke.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.5;
        z-index: -1;
    }

    @media (max-width: 800px) {
        #about {
            padding: 30px;
        }
    }
</style>
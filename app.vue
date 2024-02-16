<script setup>
    useSeoMeta({
        title: '木白',
        ogTitle: '木白',
        description: 'Illustrator / Developer',
        ogDescription: 'Illustrator / Developer',
        ogImage: 'https://s24egao.github.io/img/profile.png',
        twitterCard: 'summary'
    })

    useHead({
        htmlAttrs: {
            lang: 'zh-tw'
        },
        link: [
            { rel: 'icon', type: 'image', href: '/icon.png' },
            { rel: 'apple-touch-icon', href: '/icon.png' }
        ]
    })
</script>

<template>
    <div>
        <div id="bg"></div>
        <Menu></Menu>
        <NuxtPage></NuxtPage>
        <Footer></Footer>
        <EdgeText left="HELLO WORLD" right="HELLO WORLD"></EdgeText>
        <SplashScreen></SplashScreen>
        <MouseEffect hover-target="a, .button, .work-item *, a > img"></MouseEffect>
        <ScrollTransition delay="100"></ScrollTransition>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;900&display=swap');

    .page-enter-active, .page-leave-active {
        transition: opacity 0.5s, transform 0.5s;
    }

    .page-enter-from, .page-leave-to {
        position: absolute;
        width: 100%;
        opacity: 0;
        transform: translateY(60px);
    }

    :root {
        --main-color: white;
        --second-color: #999999;
        color: var(--second-color);
        color-scheme: dark;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    ::selection {
        background: var(--main-color);
        color: black;
    }

    #banner {
        background-image: url(/img/abstract.jpg);
        background-size: cover;
        background-position: center;
        height: 600px;
        margin: 8px;
        border-radius: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 210px;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1;
    }

    #banner[data-dark='true']::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background: linear-gradient(90deg, black 0%, transparent 100%);
    }

    #banner * {
        position: relative;
    }

    html {
        background: black;
        scroll-behavior: smooth;
    }

    body {
        margin: 0px;
        position: relative;
    }

    #bg {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-image: url(/img/bg.jpg);
        background-size: 100%;
        z-index: -2;
    }

    h1 {
        font: 900 60px Noto Sans TC;
        margin: 20px 0px;
    }

    h2 {
        font: 900 40px Noto Sans TC;
        margin: 20px 0px;
    }

    h3 {
        font: 900 21px Noto Sans TC;
        margin: 6px 0px;
    }

    h4 {
        color: var(--second-color);
        font: 900 12px Noto Sans TC;
        margin: 6px 0px;
    }

    div {
        color: var(--main-color);
        font: 400 15px Noto Sans TC;
        line-height: 1.8;
    }
    
    a {
        text-decoration: none;
    }

    section {
        padding: 30px 90px;
    }

    .item-with-tag {
        color: var(--main-color);
        font-size: 15px;
    }

    .item-with-tag::before {
        content: attr(data-tag);
        display: block;
        color: var(--second-color);
        font: 900 12px Noto Sans TC;
        text-transform: uppercase;
    }

    @media (max-width: 800px) {
        #banner {
            padding: 30px;
        }

        body {
            padding-top: 90px;
        }

        section {
            padding: 30px 8px;
        }

        h1 {
            font-size: 36px;
        }

        h2 {
            font-size: 26px;
        }
    }
</style>
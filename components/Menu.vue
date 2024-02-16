<script setup>
    const menuToggled = ref(false)

    const pages = [
        { display: 'PROFILE', path: '/' },
        { display: 'WORKS', path: '/works' },
        { display: 'GALLERY', path: '/gallery' }
    ]
</script>

<template>
    <div>
        <NuxtLink to="/"><img src="/img/logo.png" alt="" height="36" id="mobile-logo"></NuxtLink>
        <header :data-toggled="menuToggled" @click="menuToggled = false">
            <NuxtLink to="/"><img src="/img/logo.png" alt="" height="36"></NuxtLink>
            <nav>
                <div v-for="(page, index) in pages"><NuxtLink :to="page.path" :data-visit="$route.path == page.path" :style="{ '--index': index }">{{ page.display }}</NuxtLink></div>
            </nav>
        </header>
        <div id="menu-toggle" @click="menuToggled = !menuToggled"></div>
    </div>
</template>

<style>
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 120px;
        box-sizing: border-box;
        line-height: 0;
    }

    header > a {
        margin-right: 100px;
    }

    header nav {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        max-width: 500px;
    }

    header nav a {
        font: 900 12px Noto Sans TC;
        color: var(--main-color);
        letter-spacing: 1px;
        white-space: nowrap;
        transition: color 0.3s 0s, transform 0.3s calc(0.2s * var(--index) + 0.3s), opacity 0.3s calc(0.2s * var(--index) + 0.3s);
    }

    header nav a[data-visit='true'] {
        color: var(--second-color);
    }

    header nav a::before {
        content: '/ ';
        display: inline-block;
        transition: transform 0.3s;
    }

    header nav a:hover::before {
        transform: translateX(-6px);
    }

    #menu-toggle {
        position: fixed;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 100%;
        top: 38px;
        right: 38px;
        z-index: 2;
        transition: filter 0.3s;
        display: none;
    }
    
    #mobile-logo {
        position: absolute;
        top: 30px;
        left: 30px;
        display: none;
    }

    @media (max-width: 800px) {
        header {
            position: fixed;
            background: var(--main-color);
            width: 100vw;
            height: 100vh;
            top: 0px;
            left: 0px;
            z-index: 2;
            padding: 30px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            pointer-events: none;
            clip-path: circle(0% at 100% 0%);
            transition: clip-path 1s;
        }

        header[data-toggled='true'] {
            pointer-events: all;
            clip-path: circle(calc(100vw + 100vh) at 100% 0%);
        }

        header nav a {
            display: inline-block;
            opacity: 0;
            transform: translate(30px, 0px);
        }

        header[data-toggled='true'] nav a {
            opacity: 1;
            transform: translate(0px, 0px);
        }

        header::after {
            content: '';
            position: absolute;
            height: calc(100vh - 200px);
            width: 120px;
            right: 0px;
            border-radius: 60px 0px 0px 60px;
            background-image: url(/img/abstract.jpg);
            background-size: cover;
            background-position: 25%;
        }

        header img {
            position: absolute;
            top: 30px;
            left: 30px;
            filter: invert(1);
        }

        header nav {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 21px;
        }

        header nav a {
            font-size: 24px;
            color: black;
        }

        #menu-toggle {
            display: block;
        }

        header[data-toggled='true'] + #menu-toggle {
            filter: invert(1);
        }

        #mobile-logo {
            display: block;
        }
    }
</style>
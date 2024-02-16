<template>
    <footer>
        <div>
            <h2>木白 | SHOW</h2>
            <div>This website is made by 木白</div>
            <div>©2023</div>
        </div>
        <nav>
            <div><NuxtLink to="/">PROFILE</NuxtLink></div>
            <div><NuxtLink to="/works">WORKS</NuxtLink></div>
            <div><NuxtLink to="/gallery">GALLERY</NuxtLink></div>
        </nav>
        <img src="/img/character.png" alt="" height="300">
    </footer>
</template>

<style>
    footer {
        position: relative;
        width: 100%;
        margin-top: 60px;
        padding: 90px 120px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        overflow: clip;
        background: black;
    }

    footer div > div {
        color: var(--second-color);
    }

    footer nav {
        align-self: end;
    }

    footer nav a {
        font: 900 12px Noto Sans TC;
        line-height: 2;
        letter-spacing: 1px;
        color: var(--main-color);
        transition: color 0.5s;
    }

    footer nav a:hover {
        color: var(--second-color);
    }

    footer nav a::before {
        content: '/ ';
    }
    
    footer img {
        position: absolute;
        bottom: 0px;
        right: 60px;
        filter: brightness(0) drop-shadow(0px 0px 2px var(--second-color));
    }

    @media (max-width: 800px) {
        footer {
            grid-template-columns: 1fr;
            padding: 60px 16px;
        }
    
        footer img {
            right: -60px;
        }
    }
</style>
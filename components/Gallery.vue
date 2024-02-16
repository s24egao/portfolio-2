<script setup>
    const props = defineProps(['media', 'scale'])

    const gallery = ref()

    let images = ref(props.media.filter(i => !i.endsWith('mp4')))
    let videos = ref(props.media.filter(i => i.endsWith('mp4')))

    onMounted(() => {
        for(let image of gallery.value.querySelectorAll('img')) 
            if(image.complete) image.style.setProperty('--aspect', image.naturalWidth / image.naturalHeight)
            else image.addEventListener('load', () => image.style.setProperty('--aspect', image.naturalWidth / image.naturalHeight))

        for(let video of gallery.value.querySelectorAll('video')) 
            if(video.readyState >= 2) video.style.setProperty('--aspect', video.videoWidth / video.videoHeight)
            else video.addEventListener('loadeddata', () => video.style.setProperty('--aspect', video.videoWidth / video.videoHeight))
    })
</script>

<template>
    <div class="gallery" ref="gallery" :style="{ '--scale': scale || 1 }">
        <img data-hide="true" v-for="image in images" :src="image">
        <video autoplay loop muted playsinline disablepictureinpicture data-hide="true" v-for="video in videos" :src="video"></video>
    </div>
</template>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        margin: 30px 0px 90px 0px;
        gap: 8px;
    }

    .gallery img, .gallery video {
        border-radius: 16px;
        flex-grow: var(--aspect);
        width: calc(100px * var(--aspect) * var(--scale));
        max-width: calc(100px * var(--aspect) * var(--scale) * 3);
    }

    .gallery img {
        image-rendering: pixelated;
    }

    @media (max-width: 800px) {
        .gallery img, .gallery video {
            width: calc(100px * var(--aspect) * var(--scale) * 0.5);
            max-width: calc(100px * var(--aspect) * var(--scale) * 1.5);
        }
    }
</style>
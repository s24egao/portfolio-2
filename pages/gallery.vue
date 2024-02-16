<script setup>
    useSeoMeta({
        title: 'GALLERY - 木白',
        ogTitle: 'GALLERY - 木白',
        description: 'Illustrator / Developer',
        ogDescription: 'Illustrator / Developer'
    })

    const gallery = [
        '/img/gallery/image1.jpg',
        '/img/gallery/image2.jpg',
        '/img/gallery/image3.jpg',
        '/img/gallery/image4.jpg',
        '/img/gallery/image5.jpg',
        '/img/gallery/image6.jpg',
        '/img/gallery/image7.jpg',
        '/img/gallery/image8.jpg',
        '/img/gallery/image9.jpg',
        '/img/gallery/image10.jpg',
        '/img/gallery/image11.jpg',
        '/img/gallery/image17.jpg',
        '/img/gallery/image18.jpg',
        '/img/gallery/image21.jpg',
        '/img/gallery/image22.jpg',
        '/img/gallery/image23.jpg',
        '/img/gallery/image31.jpg',
        '/img/gallery/image32.jpg',
        '/img/gallery/image33.jpg',
        '/img/gallery/image34.jpg',
        '/img/gallery/image39.jpg',
        '/img/gallery/image46.jpg',
        '/img/gallery/image47.jpg',
        '/img/gallery/image49.jpg',
        '/img/gallery/image38.jpg',
        '/img/gallery/image19.mp4',
        '/img/gallery/image20.mp4',
        '/img/gallery/image30.mp4',
    ]

    const illust = [
        '/img/gallery/image28.png',
        '/img/gallery/image12.jpg',
        '/img/gallery/image14.jpg',
        '/img/gallery/image29.jpg',
        '/img/gallery/image37.jpg',
        '/img/gallery/image40.jpg',
        '/img/gallery/image41.jpg',
        '/img/gallery/image44.jpg',
        '/img/gallery/image48.jpg',
        '/img/gallery/image50.jpg',
        '/img/gallery/image15.jpg',
        '/img/gallery/image16.jpg',
        '/img/gallery/image36.jpg',
        '/img/gallery/image42.png',
        '/img/gallery/image27.mp4',
        '/img/gallery/image13.jpg'
    ]
</script>

<template>
    <div>
        <section id="gallery">
            <SectionName subtitle="數位創作">DIGITAL ARTS</SectionName>
            <Gallery :media="gallery" scale="2.5"></Gallery>
            <SectionName subtitle="插畫">ILLUST</SectionName>
            <Gallery :media="illust" scale="2.5"></Gallery>
        </section>
    </div>
</template>
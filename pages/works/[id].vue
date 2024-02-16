<script setup>
    const route = useRoute()
    const work = await queryContent(`/${ route.params.id }`).findOne()

    useSeoMeta({
        title: work.name + ' - 木白',
        ogTitle: work.name + ' - 木白',
        description: work.info,
        ogDescription: work.info,
    })
</script>

<template>
    <div>
        <div data-hide="true" id="banner" :style="{ backgroundImage: 'url(' + work.image + ')' }"></div>
        <section>
            <h1 data-hide="true">{{ work.name }}</h1>
            <Grid>
                <div v-for="info in work.info" class="item-with-tag" data-hide="true" :data-tag="info.name">{{ info.content }}</div>
            </Grid>
            <div style="width: 100%; display: flex; justify-content: flex-end; margin: 30px 0px;">
                <Click data-hide="true" :to="work.link" target="_blank" class="big">OPEN</Click>
            </div>
        </section>
    </div>
</template>
<script setup>
    useSeoMeta({
        title: 'WORKS - 木白',
        ogTitle: 'WORKS - 木白',
        description: 'Illustrator / Developer',
        ogDescription: 'Illustrator / Developer'
    })
</script>

<template>
    <div>
        <section id="works">
            <SectionName subtitle="作品">WORKS</SectionName>
            <Grid>
                <ContentList path="/" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
                    <WorkItem v-for="work in list" :date="work.date" :img="work.image" :to="work.page">{{ work.name }}</WorkItem>
                </ContentList>
            </Grid>
        </section>
    </div>
</template>
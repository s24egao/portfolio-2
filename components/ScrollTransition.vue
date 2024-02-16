<script setup>
    const props = defineProps(['delay'])

    let finished = true

    function findScrollPos(e) {
        if(e && e.offsetParent != document.body) return e.offsetTop + findScrollPos(e.offsetParent)
        else return e.offsetTop
    }

    function findScrollPosAll(elements) {
        for(let e of elements) e.dataset.scrollPos = findScrollPos(e)
        if(finished) nextTransition(null, elements)
    }

    function nextTransition(target, elements) {
        finished = false
        
        if(target) target.dataset.hide = 'false'
        for(let e of elements) if(e.dataset.scrollPos < scrollY + innerHeight - 100 && e.dataset.hide == 'true') {
            setTimeout(() => { nextTransition(e, elements) }, props.delay || 100)
            return
        }

        finished = true
    }

    onMounted(() => {
        let transitionElements = document.querySelectorAll(`*[data-hide='true']`)
        findScrollPosAll(transitionElements)

        new MutationObserver(() => {
            transitionElements = document.querySelectorAll(`*[data-hide='true']`)
            findScrollPosAll(transitionElements)
        }).observe(document.body, { childList: true, subtree: true })

        addEventListener('resize', () => findScrollPosAll(transitionElements))
        addEventListener('scroll', () => { if(finished) nextTransition(null, transitionElements) })
    })
</script>

<template>
    <div></div>
</template>

<style>
    *[data-hide] {
        transition: opacity 0.5s, transform 0.5s;
    }

    *[data-hide='true'] {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
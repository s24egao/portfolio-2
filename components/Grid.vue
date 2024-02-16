<template>
    <div class="grid">
        <slot />
    </div>
</template>

<style>
    .grid {
        display: grid;
	    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
        margin: 30px 0px;
        gap: 90px 36px;
    }

    @media (max-width: 800px) {
        .grid {
            grid-template-columns: 1fr;
            gap: 60px;
        }
    }
</style>
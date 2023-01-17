<template>
    <div>
        <topBar></topBar>
        <cardapioHome></cardapioHome>
        <footerBar></footerBar>
        <direitosBar></direitosBar>
    </div>
</template>

<script>
import topBar from '@/components/topBar.vue'
import cardapioHome from '@/components/cardapioHome.vue'
import footerBar from '@/components/footerBar.vue'
import direitosBar from '@/components/direitosBar.vue'


export default {
    name: 'Cardapio.vue',
    components: {
        topBar,
        cardapioHome,
        footerBar,
        direitosBar,
    }
} 
</script>

<style scoped>
</style>
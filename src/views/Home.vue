<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <topBar></topBar>
    <homeBar></homeBar>
    <cardapioBar></cardapioBar>
    <encontreBar></encontreBar>
    <footerBar></footerBar>
    <direitosBar></direitosBar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import topBar from '@/components/topBar.vue'
import homeBar from '@/components/homeBar.vue'
import cardapioBar from '@/components/cardapioBar.vue'
import footerBar from '@/components/footerBar.vue'
import direitosBar from '@/components/direitosBar.vue'
import encontreBar from '@/components/encontreBar.vue'

export default {
  name: 'Home',
  components: {
    topBar,
    homeBar,
    cardapioBar,
    footerBar,
    direitosBar,
    encontreBar,
    // HelloWorld
  }
}
</script>

<style scoped>

</style>

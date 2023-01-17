<template>
    <div>
        <topBar></topBar>
        <div class="quem">
            <img class="imgdarling" src="../../public/darlinglocal.jpg" alt="">
                <!-- <div class="quemsomos"> -->
                    <!-- <h2>Quem Somos</h2> -->
                <!-- </div> -->
            <div class="somos">
                <div class="sobre">
                    <img src="../../public/foto8.png" alt="" class="imgsobre">
                    <div class="textos">
                        <h1>Quem Somos?</h1>
                        <h2>Hamburguer Darling Dinner</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem cum sunt autem. Sed, magnam libero eius amet fugit incidunt eaque cupiditate voluptatem, facere molestias natus ad commodi quaerat maiores modi odio impedit aspernatur. Distinctio provident earum consectetur quod facere dolore omnis maiores tempore? Possimus numquam nobis deleniti dicta dolor aperiam?</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- <encontreBar></encontreBar> -->
        <footerBar></footerBar>
        <direitosBar></direitosBar>
    </div>
</template>

<script>

import topBar from '@/components/topBar.vue'
import footerBar from '@/components/footerBar.vue'
import direitosBar from '@/components/direitosBar.vue'
// import encontreBar from '@/components/encontreBar.vue'

export default {
    name: 'cardapioBar.vue',
    components: {
        topBar,
        footerBar,
        direitosBar,
        // encontreBar,
    }
} 
</script>

<style scoped>

* {
    font-family: 'Montserrat', sans-serif;
}

.quem {
    margin-top: 101px;
    /* background-color: red; */
    /* border-bottom: 2px solid white; */
}

.imgdarling {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    object-position: 20% 50%;
}
.somos {
    background-color: #ececec;
opacity: 1;
background-image:  linear-gradient(135deg, #f3f3f3 25%, transparent 25%), linear-gradient(225deg, #f3f3f3 25%, transparent 25%), linear-gradient(45deg, #f3f3f3 25%, transparent 25%), linear-gradient(315deg, #f3f3f3 25%, #ececec 25%);
background-position:  10px 0, 10px 0, 0 0, 0 0;
background-size: 10px 10px;
background-repeat: repeat;
    /* height: 60vh; */
    height: 50vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.imgsobre {
    height: 23rem;
    width: 28rem;
    object-fit: cover;
}

.sobre {
    display: flex;
}

.quemsomos {
    background-color: white;
    text-align: center;
    padding-top: 8px;
    font-size: 19px;
}

.textos {
    max-width: 45em;
    text-align: left;
}
.sobre h1 {
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 15px;
}

.sobre h2 {
    margin-left: 15px;
    margin-top: 0px;
    margin-bottom: 0;
    color: rgba(177, 20, 20, 0.822);;
}

.sobre h3 {
    margin-left: 15px;
    margin-top: 18px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
}

/* .sobre h1, h2, h3 {
    margin: 0;
} */

</style>
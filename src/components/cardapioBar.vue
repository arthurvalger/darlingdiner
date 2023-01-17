<template>
    <div >
        <div class="bar">
            <h2>Explore nosso cardápio</h2>
        </div>
    <div class="cardapio">
        <div class="lista-cardapio">
            <div class="container">
            <div class="cardapios">
                <div class="imagem">
                    <img src="../../public/foto8.png" alt="" srcset="">
                    <h2 class="centered"><h2>centered</h2></h2>
                </div>
                <div class="imagem">
                    <img src="../../public/foto7.webp" alt="" srcset="">
                    <h2 class="centered"><h2>centered</h2></h2>
                </div>
                <div class="imagem">
                <img src="../../public/foto7.png" alt="" srcset="">
                    <h2 class="centered"><h2>centered</h2></h2>
                </div>
                </div>
            </div>
            <div class="container">
            <div class="cardapios">
                <div class="imagem">
                    <img src="../../public/foto8.png" alt="" srcset="">
                    <h2 class="centered"><h2>centered</h2></h2>
                </div>
                <div class="imagem">
                    <img src="../../public/foto7.webp" alt="" srcset="">
                    <h2 class="centered"><h2>centered</h2></h2>
                </div>
                <div class="imagem">
                <img src="../../public/foto7.png" alt="" srcset="">
                    <h2 class="centered"><h2>centered</h2></h2>
                </div>
                </div>
            </div>
            <div class="buttons">
                <a href="#" class="button">Veja nosso cardápio completo</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'cardapioBar.vue'
} 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

}

.bar {
    background-color: rgb(145, 19, 19);
    /* margin-top: 25px; */
    /* text-align: center; */
    justify-content: center;
    /* width: 25rem; */
    height: 3rem;
    border-radius: 14px;
    display: grid;
    margin:  85px auto 18px auto;
    place-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    color: rgb(238, 238, 238);
}

.cardapio {
    /* background-color: rgb(177, 20, 20); */
    width: 50%;
    /* justify-items: center; */
    /* padding: 15px; */
    /* height: 15rem; */
    margin: 0 auto;
    /* border-radius: 15px; */
}

.cardapios {
    display: flex;
}

.lista-cardapio {
    text-align: center;
    color: white;
}

.cardapios img {
    /* margin-right: 15px; */
}

.container {
    /* width: 300px; */
    display: block;
    /* width: 35%; */
    /* height: 300px; */
}

.imagem {
    position: relative;
    text-align: center;
    overflow: hidden;
    padding: 4px;
    
}

.container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease;
}

.container img:hover {
    transform: scale(1.1);
}

.buttons {
    /* margin-top: 8px; */
    padding: 4px;
    margin: 8px auto 0;
    border-radius: 30px;
    width: 34%;
    background-color: #f5f5f5;
    cursor: pointer;
    /* width: 55px; */
    transition: all 0.3s ease;

}

.button {
    text-decoration: none;
    /* padding: 20px 50px; */
    /* margin-top: 15px; */
    font-size: 1.4rem;
    /* width: 35px; */
    /* height: 35px; */
    /* position: relative; */
    /* margin: 32px; */
    color: rgb(31, 31, 31);
    transition: all 0.3s ease;
}

.buttons:hover {
    transform: scale(1.04);
    background-color: #f0f0f0;
}

.buttons:active {
    background-color: #fafafa;
}


.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    font-weight: bold;
    text-shadow: 2px 2px #0a0a0a;
    /* border: 1px solid black; */
}

.centered h2 {
    /* transition: transform .3s; */
    cursor: pointer;
}

.centered h2:hover {
    /* transform: scale(1.5); */
}



</style>
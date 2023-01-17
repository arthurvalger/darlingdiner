<template>
    <div class="cardapio">
        <div class="imagem">
            <img src="../../public/darlinglocal.jpg" alt="" class="imgdarling">
        </div>
        <div class="cardapiobar">
            <div class="texto">
                Nosso cardápio
            </div>
            <div class="produtos">
                <!-- PRODUTO 1 -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                
            </div>

                <!-- SEGUNDA LISTA -->

             <div class="produtos">
                <!-- PRODUTO 1 -->
                <a href="#">
                    <div href="#" class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
                <a href="#">
                    <div class="produto">
                        <img class="imgproduto" src="../../public/foto8.png" alt="">
                        <div class="produtotexto">Produto</div>
                    </div>
                </a>
                <!-- PRODUTO -->
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardapioHome.vue'
} 
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}

.cardapio {
    margin-top: 101px;
}

.imgdarling {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    object-position: 20% 50%;
}

.cardapiobar {
    background-color: #ececec;
opacity: 1;
background-image:  linear-gradient(135deg, #f3f3f3 25%, transparent 25%), linear-gradient(225deg, #f3f3f3 25%, transparent 25%), linear-gradient(45deg, #f3f3f3 25%, transparent 25%), linear-gradient(315deg, #f3f3f3 25%, #ececec 25%);
background-position:  10px 0, 10px 0, 0 0, 0 0;
background-size: 10px 10px;
background-repeat: repeat;
    height: 40em;
}

.texto {
    font-size: 35px;
    font-weight: bold;
    padding-top: 30px;
    text-align: center;
}

.produtos {
    margin-top: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.produtos a {
    text-decoration: none;
    color: black;
}


.produto {
    cursor: pointer;
    text-decoration: none;
}

.imgproduto {
    width: 20rem;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.imgproduto:hover {
    transform: scale(1.05);
}

.produtotexto {
    font-size: 25px;
}

.produtotexto:hover {
    color: #1b1b1b;
}
</style>
<template>
<div class="direitos">
    <div class="texto">
        <h4>Hamburgueria Darling Diner - Todos os direitos reservados | Desenvolvido por <a href="#">PL Serviços ❤️</a></h4>
    </div>
</div>
</template>

<script>
export default {
    name: 'direitosBar.vue'
} 
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

}

.direitos {
    background-color: black;
    padding: 5px;
}

.texto {
    text-align: center;
    color: white;
    font-size: 14px;
}

.texto a {
    text-decoration: none;
    color: rgb(240, 13, 13);
}

</style>
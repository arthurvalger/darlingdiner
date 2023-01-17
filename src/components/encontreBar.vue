<template>
<div class="encontre">Encontre nosso estebelecimento por <a href="#">Aqui</a></div>
</template>

<script>
export default {
    name: 'encontreBar.vue'
} 
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

}

.encontre {
    padding-top: 5px;
    background-color: rgb(240, 240, 240);
    padding-bottom: 5px;
    margin-top: 59px;
    text-align: center;
    font-size: 19px;
}

.encontre a {
    text-decoration: none;
    color: rgb(236, 236, 236);
    background-color: rgb(145, 19, 19);
    border-radius: 15px;
    /* padding: 8px; */
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
    /* width: 15px; */
    /* height: 15px; */
    transition: all 0.5 ease;
}

.encontre a:hover {
    background-color: rgb(119, 10, 10);
    color: white;
}

</style>
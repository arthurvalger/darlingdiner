<template>
    <div class="hero">
        <nav>
            <a href="/"><img class="logo" src="../../public/dinner.png" alt="" srcset=""></a>
            <ul>
                <li><a href="/quem-somos"><font-awesome-icon class="text-icon" :icon="['fas', 'user']"/>Quem somos</a></li>
                <li><a href="/cardapio"><font-awesome-icon class="text-icon" :icon="['fas', 'book-open']"/>Cardápio</a></li>
                <li><a href="#"><font-awesome-icon class="text-icon" :icon="['fas', 'envelope']"/>Contato</a></li>
                <li><a href="#"><font-awesome-icon class="text-icon" :icon="['fas', 'basket-shopping']"/>Peça Aqui</a></li>

            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'topBar.vue'
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

.hero {
    /* height: 100vh; */
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 1;
    /* background-color: rgb(189, 22, 22); */
}

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-top: 4px; */
    background-color: rgba(177, 20, 20, 0.822);
    border-bottom: 2px solid white;
    /* border-radius: 0px 0px 15px 15px; */
    /* padding-left: 10%; */
    /* padding-right: 10%; */
}

.logo {
    color: white;
    width: 95px;
    /* padding-right: 55px; */
    margin-right: 35px;

}

.text-icon {
    margin-right: 5px;
}

nav ul li {
    list-style-type: none;
    display: inline-block;
    /* background-color: aqua; */
    padding: 10px 20px;
    /* padding-left: 10px; */
    /* padding-right: 20px; */
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 19px;
}

nav ul li a:hover {
    color: rgb(233, 233, 233);
    /* background-color: aliceblue; */
    transition: .3s;
}

</style>
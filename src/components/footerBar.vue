<template>
    <footer>
        <div class="container-footer">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>INSTITUCIONAL</h4>
                    <ul>
                        <li> <a href="#">Quem somos</a></li>
                        <li> <a href="#">Cardápio</a></li>
                        <li> <a href="#">Contato</a></li>
                        <li> <a href="#">Peça Aqui</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Cardápio</h4>
                    <ul>
                        <li> <a href="#">Burguers</a></li>
                        <li> <a href="#">Dogs</a></li>
                        <li> <a href="#">Disserts / sobremesas</a></li>
                        <li> <a href="#">Bebidas</a></li>
                    </ul>
                </div>


                <div class="footer-col">
                    <!-- <h4>Obter Ajuda</h4> -->
                    <!-- <div class="form-sub"> -->
                        <!-- <form> -->
                            <!-- <input type="email"> -->
                            <!-- <button>subscrever</button> -->
                        <!-- </form> -->
                    <!-- </div> -->

                    <div class="medias-socias">
                        <h4>Redes Sociais</h4>
                        <!-- <a href="#">ICONES</a> -->
                        <!-- <a href="#"><font-awesome-icon class="text-icon" :icon="['fab', 'facebook']"/></a> -->
                        <a href="#"><font-awesome-icon class="text-icon" :icon="['fab', 'facebook']"/></a>
                        <a href="#"><font-awesome-icon class="text-icon" :icon="['fab', 'instagram']"/></a>
                        <a href="#"><font-awesome-icon class="text-icon" :icon="['fab', 'youtube']"/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerBar.vue'
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

footer {
    background-color: #242424;
    opacity: 0.8;
    background-image: linear-gradient(0deg, #242424 50%, rgba(145,19,19,1) 50%);
    background-size: 5px 5px;
    padding-top: 15px;
    /* padding-bottom: 15px; */
    /* margin-top: 55px; */
}

.container-footer {
    max-width: 1400px;
    padding: 0 4%;
    margin: auto;
}

.row-footer {
    display: flex;
    flex-wrap: wrap;
}

.footer-col {
    width: 25%;
    padding: 0 15px;
}

.footer-col h4 {
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    font-weight: 500;
    position: relative;
    text-transform: uppercase;
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin: 10px 0;
}

.footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: white;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: white;
    padding-left: 10px;
}

.medias-socias {
    
    }

.footer-col .medias-socias a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* height: 80px; */
    /* width: 80px; */
    /* font-size: 25px; */
    margin: 0 10px 10px 0;
    text-decoration: none;
    font-size: 35px;
    /* border-radius: 50%; */
    color: white;
    /* border: 1px solid white; */
    transition: all 0.5s ease;
}

.footer-col .medias-socias a i{
    font-size: 20px;
}

.footer-col .medias-socias a:hover {
    color: rgb(194, 194, 194);
    /* background-color: white; */
}

.footer-col .form-sub input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 1px solid white;
    color: white;
    background-color: blue;
}

.footer-col, .form-sub input::placeholder{
    color: white;

}

.foooter-col .form-sub button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    font-size: 17px;
    outline: none;
    border: none;
    cursor: pointer;
    color: blue;
    border-radius: 3px;
    font-weight: bold;
    background-color: white;
}
/* RESPONSIVO */

@media (max-width:800px) {
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media (max-width:600px) {
    .footer-col {
        width: 100%;
    }
}

</style>
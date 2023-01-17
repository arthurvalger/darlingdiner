<template>
<div class="images">
    <img src="../../public/foto3.jpg" class="img1"  alt="">
    <img src="../../public/foto4.jpg" class="img2"  alt="">
    <img src="../../public/foto5.jpg" class="img2" alt="">
</div>
</template>

<script>
export default {
    name: 'homeBar.vue'
} 
</script>

<style scoped>

* {
    overflow: hidden; 
    /* TESTAR DEPOIS O OVERFLOW */
}
.images {
    display: flex;
    /* margin-top: 35rem; */
    margin-top: 8rem;
    padding: 8px;
    /* background-color: white; */
}

img {
    width: 33%;
    height: 33%;
    background-position: center;
    background-size: cover;
    transition: ease .3s;
}

img:hover {
    transform: scale(1.04);
    filter: blur(2px);
}

.img1 {
    border-radius: 15px;
    cursor: pointer;
}
.img2 {
    /* text-align: right; */
    border-radius: 15px;
    /* background-position: center; */
    /* background-size: cover; */
    /* margin-left: 6px; */
    margin-left: 9.5px;
    /* align-items: right; */
    justify-content: right;
    cursor: pointer;
    transition:  ease transform .3s;
}
/* 
.img2:hover {
    transform: scale(1.04);
} */



</style>
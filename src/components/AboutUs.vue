<template>
    <div class="container-fluid">
        <div class="row p-md-5 p-5 justify-content-center">
            <div class="col-lg-4 col-md-5 py-4 text-black pe-lg-5">
                <div class="row py-2"><small>ABOUT US</small></div>
                <div class="row py-2"><div class="lead">We are a family owned and operated local business, and we take pride in our work.</div></div>
                <div class="row py-2"><p>From start to finish, we make sure that your experience with us is 100% positive. We will make sure that you are completely satisfied with our work.</p></div>
                <div class="row py-2 ps-2">
                    <div class="col"><router-link to="/contact"><div class="btn btn-outline-success">Find Out More</div></router-link></div></div>
            </div>
            <div class="col-lg-4 col-md-7 py-4 text-center ps-lg-5">
                <img src="@/assets/images/home/about_us.jpg" alt="turf in a building">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container-fluid {
    background-color: rgb(239, 255, 239);
}

@media screen and (min-width: 991px) {
    img {
        height: 450px;
        width: 400px;
        object-fit: cover;
    }
}

@media screen and (max-width: 991px) {
    img {
        height: 400px;
        width: 350px;
        object-fit: cover;
    }
}

@media screen and (max-width: 800px) {
    img {
        height: 450px;
        width: 400px;
        object-fit: cover;
    }
}

@media screen and (max-width: 500px) and (min-width: 300px) {
    img {
        height: 370px;
        width: 320px;
        object-fit: cover;
    }
}
</style>
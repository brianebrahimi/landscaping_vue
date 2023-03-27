<script setup>
import OurServices from '../components/OurServices.vue';
import Testimonial from '../components/Testimonial.vue';
import AboutUs from '../components/AboutUs.vue';
import Questions from '../components/Questions.vue';
import minooPicture from '@/assets/images/home/minoo_picture.jpg';

let testimonial = "“Original and with an innate understanding of their customer’s needs, the team at Sill Landscapes are always a pleasure to work with.”"
let name = "Minoo T."
let photo = minooPicture;
</script>

<template>
    <div class="container-fluid">
        <div class="row banner justify-content-center">
            <div class="top-padding"></div>
            <div class="col-md-9 col-lg-7 col-xl-6 m-lg-5 text-center banner-card">
                <div class="row pt-5 pb-2">
                    <div class="logo-card"><img class="logo" src="@/assets/images/logo.png" height="50" alt="logo">
                        <h1 class="ps-3 logo-font">Sill Landscapes</h1>
                    </div>
                </div>
                <div class="row lead p-sm-5">
                    <p>We are a small business that offers a range of services related to designing,
                        constructing, and maintaining outdoor spaces. Our services include landscaping
                        design, artificial turf installation, irrigation systems, and hardscaping (e.g.
                        Stone walkways, retaining walls, or garden paths)</p>
                    <p>We employ a team of experts who work
                        closely with clients to develop customized plans that meet their unique
                        needs and preferences, taking into account factors such as the local
                        climate, soil conditions, and available resources.</p>
                    <p>We also offer commercial services, which involve designing and
                        maintaining outdoor spaces for businesses, schools, parks, and other
                        public areas. Our goal is to enhance the aesthetic appeal and functionality of
                        outdoor spaces,
                        while also helping to preserve natural resources and promote environmental
                        sustainability.</p>
                </div>
                <div class="row justify-content-center pb-5">
                    <router-link class='btn btn-success' to="/contact">Get Started</router-link>
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
    <OurServices />
    <Testimonial :testimonial="testimonial" :name="name" :photo="photo" />
    <AboutUs />
    <Questions />
</template>

<style scoped>
.banner-card {
    background-color: #044123;
    border-radius: 0px 200px 0px 0px;
}

.banner {
    background-image: url('@/assets/images/home/home_banner.jpg');
    background-size: cover;
}

.container-fluid {
    color: white;
}

.btn {
    max-width: 155px !important;
    padding: 10px 0px !important;
}

.top-padding {
    padding-top: 120px;
}

.logo-font {
    font-size: 60px;
}

.logo {
    height: 50px;
    width: auto;
}

.logo-card {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 400px) {
    .banner-card {
        border-radius: 0px 0px 0px 0px;
    }
}
</style>
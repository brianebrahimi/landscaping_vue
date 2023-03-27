<template>
    <div class="container-fluid">
        <div class="row align-items-center py-4 justify-content-center">
            <div class="col-8 col-lg-4 col-md-5 py-4 text-center">
                <div class="row justify-content-center footer-links-box">
                    <router-link to="/" class="nav-link col py-2 text-center">Home</router-link>
                    <router-link to="/about" class="nav-link col py-2 text-center">About</router-link>
                    <router-link to="/contact" class="nav-link col py-2 text-center">Contact</router-link>
                </div>
            </div>
            <router-link to="/" style='text-decoration: none;' class="d-flex col-lg-4 col-md-2 p-4 justify-content-center"><img src="@/assets/images/logo.png" height="50" alt="logo"><p class="ps-2 logo-font">Sill Landscapes</p></router-link>
            <div class="col-lg-4 col-md-5 p-4 text-center small">Website by Brian Ebrahimi</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .container-fluid {
        background-color: rgb(251, 255, 251);
        color: rgb(48, 48, 48)
    }

    @media screen and (min-width: 1300px) and (max-width: 1400px) {
        .footer-links-box {
            padding-left: 50px;
            padding-right: 50px;
        }
    }

    @media screen and (min-width: 1400px) {
        .footer-links-box {
            padding-left: 80px;
            padding-right: 80px;
        }
    }
</style>
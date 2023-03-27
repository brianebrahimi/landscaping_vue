<template>
    <nav class="navbar navbar-expand-lg navbar-light px-5 py-3">
        <div class="container-fluid">
            <router-link style="text-decoration: none; display: flex;" to="/"><img src="@/assets/images/logo.png" class="navbar-brand" height="60" alt="logo"><p class="ps-2 logo-font">Sill Landscapes</p></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav  ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page" style="color: white;">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" aria-current="page" style="color: white;">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link" aria-current="page" style="color: white;">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        position: absolute;
        background-color: white !important;
    }

    .nav-link {
        color: rgb(63, 63, 63) !important;
    }

    @media only screen and (max-width: 991px) {
        .nav-item {
            background-color: white !important;
        }

        .nav-link {
            padding-left: 20px;
            border-bottom: 1px lightgray solid;
        }
    }
</style>
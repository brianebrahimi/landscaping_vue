<template>
    <div class="container-fluid">
        <div class="row text-center">
            <div class="col py-3">
                <h1 class="pt-4"><i class="bi bi-quote"></i></h1>
                <div class="lead py-4">
                    {{ this.testimonial }}
                </div>
                <img class="mt-3 rounded-circle" :src="this.photo" alt="a person">
                <p class="py-3">{{this.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['testimonial', 'name', 'photo'],
}
</script>

<style lang="scss" scoped>
    img {
        height: 100px;
        width: 100px;
    }

    .container-fluid {
        background-color: rgb(72, 128, 77) !important;
    }

    .lead {
        padding: 10% 20%;
        font-size: x-large;
    }

    i {
        font-size: xxx-large;
    }

    @media screen and (max-width: 499px) {
        .lead {
        padding: 0% 0%;
        font-size: x-large;
    }
    }
</style>
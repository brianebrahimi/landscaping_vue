<template>
    <div class="container-fluid p-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col text-center">
                <div class="pt-5 pb-4 questions">QUESTIONS?</div>
                <div class="lead py-3">Whether you're curious about prices, warantees, maintenance, or something else, we're here to answer any questions.</div>
                <router-link to="/contact" class="btn btn-success px-4 my-5">Let's Talk Now</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .container-fluid {
        background-color: rgb(160, 187, 160);
        color: rgb(70, 70, 70);
    }

    .questions {
        font-size: xxx-large;
    }
</style>
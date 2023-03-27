<template>
    <div class="container p-5 mt-5">
        <div class="row text-center">
            <h1 class="pb-3">Our Services</h1>
            <hr class="horizontal-divider">
        </div>
        <div class="row py-4">
            <div class="col-lg-4 text-center py-3">
                <img src="@/assets/images/home/residential.jpg" alt="residential">
                <div class="lead py-3">Residential</div>
                <p class="px-3">Whether you're looking for a low maintenance lawn, an area to entertain, or a backyard activity area, we've got you covered.</p>
            </div>
            <div class="col-lg-4 text-center py-3">
                <img src="@/assets/images/home/commercial.jpg" alt="commercial">
                <div class="lead py-3">Commercial</div>
                <p class="px-3">Gyms, playgrounds, daycares, mini golf, dog parks, and more.</p>
            </div>
            <div class="col-lg-4 text-center py-3">
                <img src="@/assets/images/home/sports.jpg" alt="sports">
                <div class="lead py-3">Sports & Pets</div>
                <p class="px-3">Sports fields, personal putting greens, and areas for your pets to roll around in and not track dirt into your home.</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .horizontal-divider {
        border-top: 5px solid green;
        border-radius: 10px;
        max-width: 100px;
        margin: auto;
    }

@media screen and (min-width: 1200px) {
    img {
        height: 400px;
        width: 270px;
        object-fit: cover;
    }
}

@media screen and (min-width: 991px) and (max-width: 1200px) {
    img {
        height: 400px;
        width: 270px;
        object-fit: cover;
    }
}

@media screen and (max-width: 991px) {
    img {
        height: 400px;
        width: 400px;
        object-fit: cover;
    }
}

</style>
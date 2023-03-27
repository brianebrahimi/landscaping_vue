<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center">
                <div class="row">
                    <div class="banner">
                        <div class="row justify-content-center">
                            <div class="banner-card p-5 col-12 col-sm-10 col-md-10 col-lg-9 col-xl-6">
                                <div class="card-header">{{ this.name }}</div>
                                <div class="card-body">
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'img'],
}
</script>

<style lang="scss" scoped>
.banner {
    background-image: v-bind(img);
    background-size: auto 100%;
    padding-top: 150px;
    padding-bottom: 150px;
    color: white;
}

.container-fluid {
    padding: 0px;
    margin: 0px;
}

.banner-card {
    background-color: #044123;
    border-radius: 0px 200px 0px 0px;
}

.card-header {
    font-size: 70px;
    color: #03b585;
    font-family: 'League Gothic', sans-serif;
}
</style>
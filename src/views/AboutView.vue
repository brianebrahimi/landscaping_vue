<script setup>
import PageBanner from '../components/PageBanner.vue';
import AboutPageMiddle from '../components/AboutPageMiddle.vue';
import Testimonial from '../components/Testimonial.vue';
import aboutPage from "@/assets/images/about_us/about_page.jpg";
import avatar from "@/assets/images/about_us/avatar_on_about.png";

let testimonial = "“Sill Landscapes has an amazing team of hard working professionals. It has been a pleasure to meet them.”"
let photo = avatar
let name = "Emily D."

let url1 = `url('${aboutPage}')`
</script>

<template>
  <PageBanner :name="'about us'" :img="url1">
    <div class="container p-0 m-0">
    <p>The primary services offered by our company include:</p>
      <div class="lead pb-2"> Design: </div>
      <p>We work with our clients to develop a customized plan for their
      specific needs and preferences, including the size and shape of the area, the type of
      turf, and any additional features such as padding or drainage.</p>

    <div class="lead pb-2">Installation:</div> 
    <p>We will prepare the area by removing any existing grass or debris,
      installing a base layer of gravel or sand, and then laying the artificial turf on top.
      The turf will be secured in place and any seams will be sealed.</p>

    <div class="lead pb-2">Maintenance:</div> 
    <p>We offer ongoing maintenance services, such as cleaning the turf,
      removing debris, and repairing any damage.</p>
    </div>
  </PageBanner>
  <AboutPageMiddle />
  <Testimonial :testimonial=testimonial :photo=photo :name="name" />
</template>

<style scoped>
p {
  font-size: 18px;
}

.lead {
  color: #03b585;
  font-weight: bold;
}
</style>

<template>
    <PageBanner :name="'contact us'" :img="url1">
    <p>
        If you have any questions, comments, or would like to discuss a project, 
        please do not hesitate to contact us. We would be more than happy to hear 
        from you and help in any way that we can. You can reach us by phone, email, 
        or by filling out the contact form below. We pride ourselves on 
        providing exceptional customer service, and we will respond to 
        your inquiry as soon as possible. We look forward to hearing from you 
        and working together to achieve your goals.
    </p>
    </PageBanner>
    <ContactForm/>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
import PageBanner from '../components/PageBanner.vue';
import grassBanner from '@/assets/images/contact/grass-banner.jpg';

let url1 = 'url("' + grassBanner + '")';
</script>

<style lang="scss" scoped>
p {
    font-size: larger;
}
</style>
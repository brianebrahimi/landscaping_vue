<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-md py-3">
                <div class="row large-font py-4 justify-content-center justify-content-md-start">You can find us at</div>
                <div class="row py-1 justify-content-center justify-content-md-start">EMAIL</div>
                <div class="row pt-1 pb-5 justify-content-center justify-content-md-start">SillLandscapes@gmail.com</div>
                <div class="row py-1 justify-content-center justify-content-md-start">PHONE NUMBER</div>
                <div class="row pt-1 pb-5 justify-content-center justify-content-md-start">408-355-8455</div>
                <div class="row py-1 justify-content-center justify-content-md-start">LOCATION</div>
                <div class="row pt-1 pb-5 justify-content-center justify-content-md-start">La Jolla, CA,
                    92037</div>
                <div class="row justify-content-center justify-content-md-start">
                    <div class="col-1"><i class="bi bi-twitter"></i></div>
                    <div class="col-1"><i class="bi bi-youtube"></i></div>
                    <div class="col-1"><i class="bi bi-instagram"></i></div>
                </div>
            </div>
            <div class="col-md py-3">
                <div class="row large-font py-4 justify-content-center justify-content-md-start">Let's get in touch</div>
                <div class="row justify-content-center justify-content-md-start">
                    <div class="form">
                        <div class="mb-3">
                            <input v-model="name" type="text" class="form-control" id="name" placeholder="Your Name">
                            <div class="invalid-feedback">Please enter a valid name.</div>
                        </div>
                        <div class="mb-3">
                            <input v-model="email" type="email" class="form-control" id="email" placeholder="Your Email">
                            <div class="invalid-feedback">Please enter a valid email.</div>
                        </div>
                        <div class="mb-3">
                            <textarea v-model="message" placeholder="Message" class="form-control" id="message"
                                rows="3"></textarea>
                            <div class="invalid-feedback">Please enter a valid message.</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <button class='btn btn-success' v-on:click="checkForm">Send Message</button>
                            <div v-if="sendFormClicked" class="loader"></div>
                        </div>

                        <div class="toast mt-3" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <i class="bi bi-envelope me-2"></i>
                                <strong class="me-auto">Contact</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div class="toast-body">
                                {{ toast_msg }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const Timeout = (time) => {
	let controller = new AbortController();
	setTimeout(() => controller.abort(), time * 1000);
	return controller;
};

var name = ref("");
var email = ref("");
var message = ref("");

var sendFormClicked = ref(false);
var nameInvalid = false;
var emailInvalid = false;
var messageInvalid = false;
var re = new RegExp("[a-z0-9]@[a-z0-9]\.[a-z0-9]")
var success_response = false;
var failure_response = false;
var toast_msg = ref();

async function checkForm() {
    let data_is_valid = true;
    if (name.value.length <= 0) {
        nameInvalid = true;
        document.querySelector("#name").classList.add("is-invalid");
        data_is_valid = false;
    }
    else {
        document.querySelector("#name").classList.remove("is-invalid");
        emailInvalid = false;
    }
    if (email.value.length <= 0 || !re.test(email.value)) {
        emailInvalid = true;
        document.querySelector("#email").classList.add("is-invalid");
        data_is_valid = false;
    }
    else {
        document.querySelector("#email").classList.remove("is-invalid");
        emailInvalid = false;
    }
    if (message.value.length <= 0) {
        messageInvalid = true;
        document.querySelector("#message").classList.add("is-invalid");
        data_is_valid = false;
    }
    else {
        document.querySelector("#message").classList.remove("is-invalid");
        emailInvalid = false;
    }
    if (data_is_valid) {
        sendFormClicked.value = true;
        document.querySelector(".btn").disabled = true;
        let status = await sendForm();
        sendFormClicked.value = false;
    }

}

async function sendForm() {
    const result = await fetch("https://www.b-rian.com/emailer/contact/", {
        signal: Timeout(6).signal,
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'name': name.value,
            'email': email.value,
            'message': message.value
        }),
    }).then((status) => {
        if (status.status == 201) {
            success_response = true;
            toast_msg.value = "Message was successfully sent! We will get back to you within 24 hours."
            document.querySelector('.toast').classList.remove('bg-danger');
            document.querySelector('.toast').classList.add('show', 'bg-success');
        }
        else {
            toast_msg.value = "Uh oh, something went wrong. Please try again later or give us a call."
            document.querySelector('.toast').classList.remove('bg-success');
            document.querySelector('.toast').classList.add('show', 'bg-danger');
        }
        document.querySelector('.btn').disabled = false;
        name.value = "";
        email.value = "";
        message.value = "";
    }).catch((error) => {
        toast_msg.value = "Uh oh, something went wrong. Please try again later or give us a call."
        document.querySelector('.toast').classList.remove('bg-success');
        document.querySelector('.toast').classList.add('show', 'bg-danger');
        document.querySelector('.btn').disabled = false;
        name.value = "";
        email.value = "";
        message.value = "";
    });
}
</script>

<style lang="scss" scoped>
.large-font {
    font-size: 30px;
}

.toast {
    color: white;
}

.loader {
    border: 4px solid #f3f3f3;
    /* Light grey */
    border-top: 4px solid #dcffe3;
    /* Blue */
    border-right: 4px solid rgb(0, 255, 0);
    border-bottom: 4px solid rgb(98, 255, 119);
    border-left: 4px solid #beffbc;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-left: 10px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
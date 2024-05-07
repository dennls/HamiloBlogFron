<template>
    <div>
        <!-- Page Header Start -->
        <div class="container py-5 px-2 bg-primary">
            <div class="row py-5 px-4">
                <div class="col-sm-6 text-center text-md-left">
                    <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">
                        Contacto
                    </h1>
                </div>
                <div class="col-sm-6 text-center text-md-right">
                    <div class="d-inline-flex pt-2">
                        <h4 class="m-0 text-white">
                            <router-link to="/" class="text-white" href="">Inicio</router-link>
                        </h4>
                        <h4 class="m-0 text-white px-2">/</h4>
                        <h4 class="m-0 text-white">Contaco</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->
        <!-- Contact Start -->
        <div class="container bg-white pt-5">
            <div class="row px-3 pb-2">
                <div class="col-sm-4 text-center mb-3">
                    <i class="fa fa-2x fa-globe mb-3 text-primary"></i>
                    <h4 class="font-weight-bold">Email</h4>
                    <p>www.rene.com</p>
                </div>
                <div class="col-sm-4 text-center mb-3">
                    <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                    <h4 class="font-weight-bold">Telefono</h4>
                    <p>+591 65396490</p>
                </div>
                <div class="col-sm-4 text-center mb-3">
                    <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                    <h4 class="font-weight-bold">Email</h4>
                    <p>info@example.com</p>
                </div>
            </div>
            <div class="col-md-12 pb-5">
                <div class="contact-form">
                    <div class="alert alert-success">Mensaje enviado correctamente</div>
                    <div class="control-group">
                        <input type="text" v-model="nombre" class="form-control" id="name"
                            placeholder="Ingresa tu nombre" required="required"
                            data-validation-required-message="Please enter your name" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Your Email"
                            required="required" data-validation-required-message="Please enter your email" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <input type="text" v-model="asunto" class="form-control" id="subject" placeholder="Subject"
                            required="required" data-validation-required-message="Please enter a subject" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <textarea class="form-control" v-model="mensaje" rows="8" id="message" placeholder="Message"
                            required="required" data-validation-required-message="Please enter your message"></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit" id="sendMessageButton">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const enviado = ref(true);
        const nombre = ref('');
        const email = ref('');
        const asunto = ref('');
        const mensaje = ref('');
        return {
            enviado,
            nombre,
            email,
            asunto,
            mensaje,
        }
    }
}
</script>
<style></style>
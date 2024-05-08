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
                    <h4 class="font-weight-bold">Website</h4>
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
                    <p>rene.mareno@hamiloes.cool</p>
                </div>
            </div>
            <div class="col-md-12 pb-5">
                <div class="contact-form">
                    <div v-show="enviado == true" class="alert alert-success">Mensaje enviado correctamente</div>
                    <div class="control-group">
                        <input v-model="nombre" type="text" class="form-control"
                            placeholder="Ingresa tu nombre" required="required"
                            data-validation-required-message="Please enter your name" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <input type="email" v-model="email" class="form-control" placeholder="Ingresa tu Email"
                            required="required" data-validation-required-message="Please enter your email" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <input type="text" v-model="asunto" class="form-control" placeholder="Asunto"
                            required="required" data-validation-required-message="Please enter a subject" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <textarea v-model="mensaje" class="form-control" rows="8" id="message" placeholder="Escribe tu mensaje"
                            required="required" data-validation-required-message="Please enter your message"></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div>
                        <button @click="enviarMensaje()" class="btn btn-primary" type="submit" id="sendMessageButton">Enviar mensaje</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
    setup() {
        const enviado = ref(false);
        const nombre = ref('');
        const email = ref('');
        const asunto = ref('');
        const mensaje = ref('');
        const urlBase = "http://hamiloblog.test/api";
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        const enviarMensaje = async () => {
            if(nombre.value == '' && email.value == '' && asunto.value == '' && mensaje.value ==''){
                alert('Todos los campos son requeridos');
                return;
            }
            try {
                const {data} = await axios.post(urlBase + '/contactos', {
                    nombre: nombre.value,
                    email: email.value,
                    asunto: asunto.value,
                    mensaje: mensaje.value
                }, {headers});
                enviado.value = true;
                setTimeout(() =>{
                    enviado.value = false;
                    nombre.value = '';
                    email.value = '';
                    asunto.value = '';
                    mensaje.value = '';
                }, 2000)
            } catch (error) {
                console.log(error)
            }
        }
        return {
            enviado,
            nombre,
            email,
            asunto,
            mensaje,
            enviarMensaje
        }
    }
}
</script>
<style></style>
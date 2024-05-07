<template>
    <!-- Page Header Start -->
    <div class="container py-5 px-2 bg-primary">
        <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
                <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">
                    Categorias del Blog
                </h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
                <div class="d-inline-flex pt-2">
                    <h4 class="m-0 text-white">
                        <router-link to="/" class="text-white" href="">Inicio</router-link>
                    </h4>
                    <h4 class="m-0 text-white px-2">/</h4>
                    <h4 class="m-0 text-white">Categorias</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->
    <div class="container py-5 px-2 bg-white">
        <div class="row px-4">
            <div v-for="item in categorias" :key="item.id" class="col-md-6">
                <div @click="filtrar(item.nombre)" class="card bg-dark text-white m-1"> 
                    <img :src="item.imagen" class="card-img" alt="..." style="width: 100%; max-height: 220px;">
                    <div class="card-img-overlay text-center">
                        <br> <br>
                        <h2 class="card-title text-white p-3 shadow-lg">
                            <b>{{ item.nombre }}</b>
                        </h2>
                        <p class="card-text">
                            <i class="fas fa-list" ></i> {{ item.cant_posts }} Posts
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const categorias = ref([]);
    
    
    const urlBase = "http://hamiloblog.test/api";
    onMounted(() => {
      //console.log(idPost);
      obtenerDatos();
    });

    const obtenerDatos = async () => {
      try {
        const { data } = await axios.get(urlBase + "/categorias");
        categorias.value = data.datos;
        console.log(data.datos);
      } catch (error) {
        console.log(error);
      }
    };

    const filtrar = (id) => {
        router.push({path: '/blog/' + id});
    }

    return {
      categorias,
      filtrar
    };
  },
};
</script>
<style scoped></style>
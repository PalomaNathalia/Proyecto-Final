<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
      <h1 class="text-center mt-5">TAREAS</h1>
      <v-row>
        <v-col cols="3">
          <v-text-field
            label="tarea"
            v-model="descripcion"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="nombre_usuario" label="Quién la realiza" clearable>
          </v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="fecha"
            label="Día / Semana"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn
            elevation="6"
            class="cyan lighten-2 white--text mt-3"
            type="submit"
            @click="agregar()"
            >Agregar</v-btn
          >
        </v-col>
      </v-row>

      <v-simple-table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Quién la realiza</th>
            <th>Semana</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="persona in personas" :key="persona.nombre">
            <td>{{ persona.descripcion }}</td>
            <td>{{ persona.nombre_usuario }}</td>
            <td>{{ persona.fecha }}</td>
            <td>
              <v-btn
                elevation="6"
                class="orange lighten-1 white--text ml-4"
                type="submit"
                @click="eliminarUsuario(persona.id)"
                >Eliminar</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
let url = "/tarea";
let urlSelect = "/usuarios";
export default {
  data() {
    return {
      personas: [],
      descripcion: "",
      nombre_usuario: "",
      fecha: "",
    };
  },
  methods: {
    getTarea() {
      axios.get(url).then((response) => {
        this.personas = response.data;
        console.log(this.personas);
      });
    },
    // Agregar
    async agregar() {
      try {
        const usuario = await axios.post(url, {
          descripcion: this.descripcion,
          nombre_usuario: this.nombre_usuario,
          fecha: this.fecha,
        });
        location.reload();
        console.log(usuario);
      } catch (error) {
        alert("Usuario no agregado");
      }
    },
    // ELIMINAR
    async eliminarUsuario(id) {
      try {
        let confirmar = window.confirm("¿Quieres eliminar esta tarea?");
        if (confirmar) {
          const user = await axios.delete(`/tarea?id=${id}`);
          console.log(user);
          alert("Tarea eliminada!");
          location.reload();
        }
      } catch (error) {
        alert("Tarea no eliminada " + error);
      }
    },
  },
  mounted() {
    this.getTarea();
  },
};
</script>

<style></style>

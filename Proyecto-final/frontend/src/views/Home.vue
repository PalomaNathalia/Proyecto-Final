<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
      <h1 class="text-center mt-5">PERSONALIZA TU DASHBOARD</h1>
      <h3 class="text-center mt-5">¿QUIÉN VIVE CONTIGO?</h3>
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="nombre_usuario"
            label="Nombre"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="monto"
            label="Aporte Mensual"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn
            elevation="6"
            class="cyan lighten-2 white--text mt-3"
            @click="agregar"
            >Agregar</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Aporte Mensual</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="persona in personas" :key="persona.id">
                <td>{{ persona.nombre_usuario }}</td>
                <td>{{ persona.monto }}</td>
                <td>
                  <!-- <v-btn
                    class="deep-purple lighten-4 white--text"
                    @click="editarUsuario(persona.id)"
                    >Editar</v-btn
                  > -->
                  <v-btn
                    class="orange lighten-1 white--text ml-4"
                    @click="eliminarUsuario(persona.id)"
                    >Eliminar</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-btn
        elevation="6"
        class="orange lighten-1 white--text mt-4 ml-4"
        type="submit"
        to="/tareas"
        >Ir a tareas</v-btn
      >
      <v-btn
        elevation="6"
        class="teal lighten-1 white--text mt-4 ml-4"
        type="submit"
        to="/pagos"
        >Ir a Pagos</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
let url = "/usuarios";

export default {
  data() {
    return {
      personas: [],
      nombre_usuario: "",
      monto: Number(),
    };
  },
  methods: {
    getUsuarios() {
      axios.get(url).then((response) => {
        this.personas = response.data;
        console.log(this.personas);
      });
    },
    // Agregar
    async agregar() {
      try {
        const usuario = await axios.post(url, {
          nombre_usuario: this.nombre_usuario,
          monto: this.monto,
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
        let confirmar = window.confirm("¿Quieres eliminar a este usuario?");
        if (confirmar) {
          const user = await axios.delete(`/usuarios?id=${id}`);
          console.log(user);
          alert("Usuario eliminado!");
          location.reload();
        }
      } catch (error) {
        alert("Usuario no eliminado " + error);
      }
    },
  },
  mounted() {
    this.getUsuarios();
  },
};
</script>

<style></style>

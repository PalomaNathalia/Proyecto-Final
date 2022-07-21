<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
      <h1 class="text-center mt-5">PAGO DE CUENTAS</h1>
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="cuenta"
            label="Cuenta"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="nombre_usuario" label="Quién paga" clearable></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="monto" label="Monto" clearable></v-text-field>
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
            <th>Cuenta</th>
            <th>Quién paga</th>
            <th>Monto</th>
            <th>Pagado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="persona in personas" :key="persona.nombre">
            <td>{{ persona.cuenta }}</td>
            <td>{{ persona.nombre_usuario }}</td>
            <td>{{ persona.monto }}</td>
        
            <v-btn
                elevation="6"
                class="orange lighten-1 white--text mt-4"
                type="submit"
                @click="eliminarUsuario(persona.id)"
                >Eliminar</v-btn
              >
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
let url = "/pago";
export default {
  data() {
    return {
      personas: null,
      estado: '',
      monto: 0,
      nombre_usuario: '',
      cuenta: '',
    };
  },
  methods: {
     getPago() {
      axios.get(url).then((response) => {
        this.personas = response.data;
        console.log(this.personas);
      });
    },
    // Agregar
    async agregar() {
      try {
        const usuario = await axios.post(url, {
          cuenta: this.cuenta,
          nombre_usuario: this.nombre_usuario,
          monto: this.monto
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
          const user = await axios.delete(`/pago?id=${id}`);
          console.log(user);
          alert("Cuenta eliminada!");
          location.reload();
        }
      } catch (error) {
        alert("Cuenta no eliminada " + error);
      }
    },
  },
  mounted() {
    this.getPago();
  },
};
</script>

<style></style>

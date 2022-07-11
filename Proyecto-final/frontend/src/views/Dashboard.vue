<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
      <h1 class="text-center mt-5">PERSONALIZA TU DASHBOARD</h1>
      <br />
      <v-row>
        <v-col cols="3">
          <v-text-field v-model="tarea" label="Tarea" clearable></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn
            elevation="6"
            class="cyan lighten-2 white--text mt-3"
            type="submit"
            >Agregar</v-btn
          >
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="cuenta"
            label="Cuenta"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn
            elevation="6"
            class="cyan lighten-2 white--text mt-3"
            type="submit"
            >Agregar</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-simple-table>
            <thead>
              <tr>
                <th>Tareas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <v-btn class="deep-purple lighten-4 white--text" type="submit"
                    >Editar</v-btn
                  >
                  <v-btn class="orange lighten-1 white--text ml-4" type="submit"
                    >Eliminar</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col cols="6">
          <v-simple-table>
            <thead>
              <tr>
                <th>Cuentas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="persona in personas" :key="persona.nombre">
                <td>{{persona.nombre}}</td>
                <td>{{persona.monto}}</td>
                <td>
                  <v-btn class="deep-purple lighten-4 white--text" type="submit"
                    >Editar</v-btn
                  >
                  <v-btn class="orange lighten-1 white--text ml-4" type="submit"
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
import axios from 'axios'
let url = '/usuario';
export default {
  data(){
    return {
    personas:null
  }
  },
methods: {
  getUsuarios(){
    axios.get(url)
    .then(response => {
      this.personas = response.data
      console.log(this.personas)
    })
  }
},
  mounted(){
		this.getUsuarios()
	},

};
</script>

<style></style>

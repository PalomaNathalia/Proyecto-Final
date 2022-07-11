<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
      <h1 class="text-center mt-5">PERSONALIZA TU DASHBOARD</h1>
      <h3 class="text-center mt-5">¿QUIÉN VIVE CONTIGO?</h3>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="message1"
            label="Nombre"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="message1"
            label="Aporte Mensual"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-btn
            elevation="6"
            class="cyan lighten-2 white--text mt-3"
            type="submit"
            to="/personas"
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
      </v-row>
      <v-btn
        elevation="6"
        class="deep-purple lighten-4 white--text mt-4 ml-4"
        type="submit"
        to="/dashboard"
        >Agregar tareas</v-btn
      >
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
export default {};
</script>

<style></style>


<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
      <h1 class="text-center mt-5">PAGO DE CUENTAS</h1>
      <v-row>
        <v-col cols="3">
          <v-select
            v-model="message1"
            label="Cuenta"
            clearable
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="message1"
            label="Quién paga"
            clearable
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="message1"
            label="Monto"
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
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><v-checkbox></v-checkbox></td>
            </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>


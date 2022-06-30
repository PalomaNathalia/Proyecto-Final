<template>
  <v-row justify="center">
    <v-col md="6" sm="6">
         <h1 class="text-center mt-5">INICIAR SESIÓN</h1>
      <v-card class="deep-purple lighten-4">
        <v-card-text>
          <v-form>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
              ></v-text-field>
            </v-col>
            <v-btn elevation="6" class="cyan lighten-2  white--text mt-3" type="submit" to="/personas">Iniciar sesión</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
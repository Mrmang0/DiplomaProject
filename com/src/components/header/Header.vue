<template>
  <v-toolbar dark color="accent" d-flex align-center >
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-flex style="font-size: 15.5px">Циклова комісія фізико-математичних дисциплін</v-flex>    
    <v-toolbar-items class="mx-5">
      <v-btn flat to="/">Головна</v-btn>
      <v-btn flat to="/teachers">Персоналії</v-btn>
      <v-btn flat to="/method-data">Науково-методична робота</v-btn>
      <v-btn flat href="http://www.vcnuft.vn.ua/">Сайт коледжу</v-btn>        
    </v-toolbar-items>
    <v-spacer></v-spacer>
      <SignPage ></SignPage>
  </v-toolbar>
</template>

<script>
import SignPage from '@/components/sign-modal/SignPage'

export default {
  components:{ 
      SignPage,
  },
}
</script>
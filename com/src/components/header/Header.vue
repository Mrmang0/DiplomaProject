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
      <SignPage v-if="!isLogged" ></SignPage>
      <drop-down v-else></drop-down>
  </v-toolbar>
</template>

<script>
import SignPage from '@/components/sign-modal/SignPage'
import DropDown from '@/components/header/Dropdown'

export default {
  components:{ 
      SignPage,
      DropDown,
  },
  computed: {
    isLogged()
    {
      return this.$store.getters.isLogged;
    }
  }
}
</script>
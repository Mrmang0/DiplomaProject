<template>
  <v-toolbar dark color="accent" d-flex align-center >
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Кафердрус</v-toolbar-title>    
    <v-toolbar-items class="mx-5">
      <v-btn flat to='/'>Головна</v-btn>
      <v-btn flat to='/teachers'>Персоналії</v-btn>
      <v-btn flat>Науково-методична робота</v-btn>
      <v-btn flat>Сайт коледжу</v-btn>        
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

<style lang="scss" scoped>



</style>

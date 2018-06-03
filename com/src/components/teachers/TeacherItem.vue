<template>
  <v-card class="px-4" style="height: 100%">
      <v-layout style="position: relative" justify-space-between column d-block text-xs-center>
          <v-flex mb-3>
            <v-avatar size="180">
                <img :src="teacher.photoUrl" alt="">
            </v-avatar>
          </v-flex>
          <v-flex title>
              {{teacher.name+' '+teacher.surname+' '+teacher.patronomyc}}
          </v-flex>
          <v-flex pt-1 disabled--text body-1 mb-2>
              {{teacher.smallDescription}}
          </v-flex>
          <v-flex text-xs-right>
              <v-btn flat small color="accent" :to="'/teachers/' +teacher.id ">Детальніше</v-btn>
          </v-flex>
      </v-layout>
  </v-card>
</template>

<script>
  export default {
    props: {
       teacher: Object
    },  
} 
</script>


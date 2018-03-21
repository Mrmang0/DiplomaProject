<template>
  <v-card class="pa-4">
      <v-layout column text-xs-center>
          <v-flex mb-3>
            <v-avatar size="140">
                <img :src="img" alt="">
            </v-avatar>
          </v-flex>
          <v-flex title>
              {{ name }}
          </v-flex>
          <v-flex disabled--text body-1 mb-2>
              {{text}}
          </v-flex>
          <v-flex text-xs-right>
              <v-btn flat small color="accent">Детальніше</v-btn>
          </v-flex>
      </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
      return {
          img: 'https://cs8.pikabu.ru/post_img/2018/03/20/9/1521555110178035798.jpg',
          name: 'Тичук Руслан Борисович',
          text: 'Гений, Миллиардер, Плейбой, Филантроп'
      }
  }
}
</script>

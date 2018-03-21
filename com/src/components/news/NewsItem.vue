<template>
  <v-layout row>
    <v-flex xs12>
      <v-card >
        <v-card-title primary-title>
          <div>
            <div class="headline">{{Since}}</div>
            <span class="grey--text">2.5 литра наслаждения</span>
          </div>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
        <v-spacer></v-spacer>
        <v-btn class="mt-5" flat @click.native="show = !show">
          <v-icon>{{ show ?'keyboard_arrow_up':'keyboard_arrow_down' }}</v-icon>
          {{show?'Сховати':'Показати більше'}}
        </v-btn>
        
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier,
            not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros
            to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        items: [{
            src: 'https://pp.userapi.com/c543109/v543109729/35abf/h6rk46CHtMY.jpg'
          },
          {
            src: 'https://pp.userapi.com/c844723/v844723507/b58a/22H2yo1kwKs.jpg'
          },
          {
            src: 'https://pp.userapi.com/c845521/v845521949/9731/450hSMyiHqM.jpg'
          },
          {
            src: 'https://sun1-7.userapi.com/c834303/v834303989/f64b5/L_FaNGx-buw.jpg'
          }
        ],
         Since: "Топовий ньюс"
      }

    }
  }

</script>

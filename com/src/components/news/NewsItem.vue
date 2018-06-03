<template>
  <v-layout row>
    <v-flex xs12>
      <v-card >
        <v-card-title primary-title>
          <div>
            <div class="headline">{{newItem.name}}</div>
            <span class="grey--text">{{newItem.date}}</span>
          </div>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-flex class="text-xs-center">
           <img style="max-height: 400px" :src="newItem.imageUrl" alt="">
        </v-flex>
        
        <v-spacer></v-spacer>
        <v-btn class="mt-5" flat @click.native="show = !show">
          <v-icon>{{ show ?'keyboard_arrow_up':'keyboard_arrow_down' }}</v-icon>
          {{show?'Сховати':'Показати більше'}}
        </v-btn>
        
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{newItem.context}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      newItem: Object
    },
    data() {
      return {
        show: false,
        items: [{
            src: 'https://lh3.googleusercontent.com/klm9HeS3xomtq18dClZ4eI7OJOoOh31OhpSZwIqWNKLTxgU9H7dGQIBLhcDGQ-Ija_ipjwE04xe9dWWr6Ex2l1aPRhzoXpOF39HLmzMuqbysm7Eg5_wfSnRWrWBFu1kgWzmgBkYMwyo8Q-sNdzpRJK51YbHlMWH9OoiRVBLq7EH4UEf4aviLXspccQzJNdFTVBrDCHtZ9E7iVX79JKfZOi66-N03Fy0JZ3jTUXloU9n5BEUVhJsorOQZdMXlz9F8y5lfkZciDEw7eNvIzjxh9crAi0ktczFFEB7AI7L76XesSlXXINNSPp3iyF9MkGVZbbIRKNKl6c_UA_YVMhWHZVZj4mPnHhrPhs3969mnFAmie-AFUkKcQCjG28ZKp_h_TzrsXB8JdciTblMugvTcslS20RwGs4DtHPnP6_rBF-lrSwNW9QXE-OUafYYoI2hJbATgX8fF9FcGS-_9TFtDXqwq13--X0DddgH_CjudEyi0wccs_eiwscF4ksypM7mFwtW_E2AKoLRPMp78cAP3CQrSzyPUYwNtYi6O1fujNX60euoBbt6qKS3_BwWiZcGcrwgh47FB_21lEBuyTac_siI4L7-FIetj4zyqRYUn-Pu12lBrVpZn=w677-h638-no'
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
      }

    }
  }

</script>

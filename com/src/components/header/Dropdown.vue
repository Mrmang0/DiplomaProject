<template>
  <v-menu offset-y min-width="280" max-width="280" :nudge-bottom="15" :nudge-width="50">
    <v-btn dark :ripple="false" color="primary" class="default--text-transform" slot="activator">   
      <v-flex body-1 long--word  mx-2>
        Вiтаю  {{getUser.name}}!
      </v-flex>
      <v-icon >
        keyboard_arrow_down
      </v-icon>
    </v-btn>

    <v-card class="pt-1">
      <v-flex d-flex align-center px-4 mb-3>  
        <v-flex text-md-left ml-2>
          <v-flex>{{getUser.name}}</v-flex>
          <v-flex disabled--text caption>
           {{getUser.surname}}
          {{getUser.patronomyc}}
          </v-flex>
        </v-flex>
      </v-flex>

      <v-divider class="middle-divider"></v-divider>

      <v-list class="mx-4">
        <v-list-tile class="link">
          <router-link to="/profile">Сторінка викладача</router-link>
        </v-list-tile>
      </v-list>

      <v-divider class="middle-divider"></v-divider>

      <v-list class="mx-4">
        <v-list-tile class="link">
          <router-link :to="`/teachers/${getUser.id}`">Налаштування профілю</router-link>
        </v-list-tile>
      </v-list>

      <v-divider class="middle-divider"></v-divider>

      <v-flex text-md-right my-2>
        <v-btn flat color="primary" @click="setLogout">
          Вийти
        </v-btn>
      </v-flex>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  methods:{
    setLogout(){
      this.$store.commit('setIsLogged',false)
    }
  },
  computed:{
    getUser(){
      return this.$store.getters.getUser;
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none !important;
}
.middle-divider {
  width: 80%;
  margin: 0 auto 0 auto;
}
.link {
  height: 35px;
}
</style>
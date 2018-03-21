<template>
  <v-app>
   <header-component class="mb-5"> </header-component>
  <router-view></router-view>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/header/Header'
import SignPage from '@/components/sign-modal/SignPage'
export default {
  components: {
    HeaderComponent,
    SignPage,
  },

  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>


<style lang="scss" scoped>
.main-container{
  width: 960px;
  margin: 0 auto;

}
</style>

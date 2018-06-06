<template>
  <div class="main-container">
    <v-card>
      <v-flex d-flex pa-4>
        <v-flex xs12 v-if="!isEditing">
          <v-flex body-2>Ім'я</v-flex>
          <v-flex>{{getUser.name}}</v-flex>
          <v-flex body-2>Прізвище</v-flex>
          <v-flex>{{getUser.surname}}</v-flex>
          <v-flex body-2>По батькові</v-flex>
          <v-flex>{{getUser.patronomyc}}</v-flex>
          <v-flex body-2>Електронна адерса</v-flex>
          <v-flex>{{getUser.email}}</v-flex>          
          <v-flex text-xs-center pt-2 >
            <v-btn @click="edit">
              Редагувати
            </v-btn>
          </v-flex>
        </v-flex>
        <v-flex v-else>
          <v-flex body-2>Ім'я</v-flex>
          <v-text-field autofocus v-model="editInfo.name"></v-text-field>
          <v-flex body-2>Прізвище</v-flex>
          <v-text-field v-model="editInfo.surname"></v-text-field>
          <v-flex body-2>По батькові</v-flex>
          <v-text-field v-model="editInfo.patronomyc"></v-text-field>
          <v-flex body-2>Електронна адерса</v-flex>
          <v-text-field v-model="editInfo.email"></v-text-field>
          <v-flex text-xs-center pa-2>
            <v-btn>
              Зберегти
            </v-btn>
            <v-btn @click="isEditing=false">
              Відмінати
            </v-btn>
          </v-flex>
        </v-flex>
      </v-flex>
    </v-card>
  </div>


</template>


<script>
import lodash from 'lodash';

export default {
  data() {
    return {
      editInfo: {},
      isEditing: false,
      registerRequestData: {
        password: '',
        confirmPassword: ''
      },
    }
  },
  methods:{
    edit()
    {
      this.isEditing = true;
      this.editInfo =lodash.cloneDeep(this.getUser);
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  }
}

</script>

<template>
  <v-dialog lazy v-model="dialog3" :full-width="true" max-width="500px">
    <v-btn color="primary" slot="activator" dark @click.stop="dialog3 = !dialog3">Авторизація</v-btn>
    <v-card class="pa-4">
      <v-tabs centered slider-color="primary">
        <v-tab href="`#tab-1`">
          Вхід
        </v-tab>
        <v-tab href="`#tab-2`">
          Реєстрація
        </v-tab>
        <v-tab-item id="`tab-1`">
          <v-text-field label="Введіть Email" hint="гы" v-model="requestData.email"></v-text-field>
          <v-text-field name="input-10-1" label="Enter your password" hint="At least 8 characters" v-model="requestData.password" min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
          <v-flex>
            <v-btn @click="login" color="primary">Війти</v-btn>
          </v-flex>
        </v-tab-item>
        <v-tab-item id="`tab-2`">
          <v-text-field label="Email" v-model="registerRequestData.email">
          </v-text-field>
          <v-text-field label="Прізвище" v-model="registerRequestData.patronym">
          </v-text-field>
          <v-text-field label="Ім'я" v-model="registerRequestData.name">
          </v-text-field>
          <v-text-field label="По-батькові" v-model="registerRequestData.surname">
          </v-text-field>
          <v-text-field name="input-10-1" label="Пароль" hint="Пароль повинен містити щонайменьше 8 символів" v-model="registerRequestData.password"
            min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
          <v-text-field name="input-10-1" label="Введіть пароль ще раз" hint="Пароль повинен містити щонайменьше 8 символів" v-model="registerRequestData.confirmPassword"
            min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
          <v-radio-group v-model="row" row>
            <v-radio label="Я студент" value="false"></v-radio>
            <v-radio label="Я викладач" value="true"></v-radio>
          </v-radio-group>
          <v-btn @click="register" color="primary">Зареєструватись</v-btn>
          <v-btn @click="clear">очистити</v-btn>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        model: 'tab-2',
        text: 'sasi',
        e1: false,
        requestData: {
          email: '',
          password: ''
        },

        registerRequestData: {
          email: '',
          patronym: '',
          name: '',
          surname: '',
          password: '',
          confirmPassword: ''
        },
      }
    },
    methods: {
      login() {
        console.log(this.requestData)
      },
      register() {
        console.log(this.registerRequestData)
      },
      clear() {
        for (let item in this.registerRequestData) {
          console.log(item)
          this.registerRequestData[item] = '';
        }
      }
    }
  }

</script>

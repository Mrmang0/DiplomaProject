<template>
  <div class="main-container">
    <v-card>
      <v-flex d-flex>
        <v-flex xs4>
          <v-avatar>
            <img src="data:image/png;base64,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"
              alt="">
          </v-avatar>
        </v-flex>
        <v-flex xs8 v-if="!isEditing">
          <v-flex body-2>Ім'я</v-flex>
          <v-flex>{{name}}1</v-flex>
          <v-flex body-2>Прізвище</v-flex>
          <v-flex>{{surname}}2</v-flex>
          <v-flex body-2>По батькові</v-flex>
          <v-flex>{{patroniym}}3</v-flex>
          <v-flex body-2>Електронна адерса</v-flex>
          <v-flex>{{Email}}4</v-flex>
          <v-flex body-2>Пароль</v-flex>
          <v-flex>********</v-flex>
        </v-flex>
        <v-flex v-else>
          <v-flex body-2>Ім'я</v-flex>
          <v-text-field></v-text-field>
          <v-flex body-2>Прізвище</v-flex>
          <v-text-field></v-text-field>
          <v-flex body-2>По батькові</v-flex>
          <v-text-field></v-text-field>
          <v-flex body-2>Електронна адерса</v-flex>
          <v-text-field></v-text-field>
          <v-flex body-2>Пароль</v-flex>
          <v-text-field name="input-10-1" label="Пароль" hint="Пароль повинен містити щонайменьше 8 символів" v-model="registerRequestData.password"
            min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
          <v-flex body-2>Введіть пароль ще раз</v-flex>
         <v-text-field name="input-10-1" label="Введіть пароль ще раз" hint="Пароль повинен містити щонайменьше 8 символів" v-model="registerRequestData.confirmPassword"
            min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
        </v-flex>
      </v-flex>
      <v-flex text-xs-center pa-2>
        <v-btn>
          Зберегти
        </v-btn>
        <v-btn>
          Відмінати
        </v-btn>
      </v-flex>
    </v-card>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        isEditing: true,
        registerRequestData: {
          password: '',
          confirmPassword: ''
        },
      }
    },
  }

</script>

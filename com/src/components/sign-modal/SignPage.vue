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
          <v-form @submit.prevent="login" ref="formLogin">
          <v-text-field :rules="emailRules" label="Введіть Email" hint="гы" v-model="requestData.email"></v-text-field>
          <v-text-field :rules="loginRules" name="input-10-1" label="Enter your password" hint="At least 8 characters" v-model="requestData.password" min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
          
          <v-flex>
            <v-btn type="submit"  color="primary">Війти</v-btn>
          </v-flex>
          </v-form>
        </v-tab-item>
        <v-tab-item id="`tab-2`">
          <v-form @submit.prevent="register" ref="formRegistration">
          <v-text-field :rules="emailRules" label="Email" v-model="registerRequestData.email">
          </v-text-field>
          <v-text-field :rules="nameRules" label="Прізвище" v-model="registerRequestData.patronym">
          </v-text-field>
          <v-text-field :rules="nameRules" label="Ім'я" v-model="registerRequestData.name">
          </v-text-field>
          <v-text-field :rules="nameRules" label="По-батькові" v-model="registerRequestData.surname">
          </v-text-field>
          <v-text-field :rules="passwordRules" name="input-10-1" label="Пароль" hint="Пароль повинен містити щонайменьше 8 символів" v-model="registerRequestData.password"
            min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>
          <v-text-field :rules="loginRules" name="input-10-1" label="Введіть пароль ще раз" hint="Пароль повинен містити щонайменьше 8 символів" v-model="confirmPassword"
            min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
            counter></v-text-field>          
          <v-btn color="primary" type="submit">Зареєструватись</v-btn>
          <v-btn @click="clear">очистити</v-btn>
          </v-form>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-dialog>
</template>



<script>
  export default {
    data() {
      return {
        confirmPassword: '',
        selectedType: null,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        model: 'tab-2',
        text: 'sasi',
        e1: true,
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

        },
        emailRules: [
          v => !!v || 'This field is required',
          v => v && /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        nameRules: [
          v => !!v || 'This field is required',
          v => v && v.length > 2 || 'is not enough characters'
        ],
        loginRules: [
          v => !!v || 'This field is required',
          v => v && v.length > 6 || 'is not enough characters'
        ],
        passwordRules: [
          v => !!v || 'This field is required',
          v => v && v.length > 6 || 'The password is too short'
        ],
        repeatPasswordRules: [
          v => !!v || 'This field is required',
          v => v && (v === this.registerRequestData.password) || 'Passwords must match each other'
        ],
        }
    },
    methods: {
      login() {
        if (this.$refs.formLogin.validate()) {
        console.log(this.requestData)
        }
      },
      register() {
        if (this.$refs.formRegistration.validate()) {
         HTTP().post(`api/account/`,this.registerRequestData)
            .then()
            .catch(err=>{
                throw new Error(err)
            })    
        }
      },
      clear() {
        for (let item in this.registerRequestData) {
          console.log(item)
          this.registerRequestData[item] = '';
        }
      }
    }
  }
// public int Id { get; set; }
//         public string Name { get; set; }
//         public string Surname { get; set; }
//         public string Patronomyc { get; set; }
//         public bool isAdmin { get; set; }

//         public string Username { get; set; }
//         public string Password { get; set; }
</script>


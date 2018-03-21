<template>
<div class="main-container">
    <v-card class="text-xs-center pa-4">
        <v-avatar size="300">
            <img :src="photo" alt="">
        </v-avatar>
        <v-flex title mt-3>
            {{name}}
        </v-flex>
        <v-flex disabled--text body-2 mb-4>
            {{description}}
        </v-flex>
        <v-flex text-xs-left px-5 mb-5>
            {{text}} 
        </v-flex>

        <v-flex d-flex px-5>
            <v-card class="mx-2 pa-2" raised width="20%" v-for="(item,i) in 5" :key="i">
                <v-flex text-xs-left>topHomework omg how she divide this BIG number без смс и регистрации.exe</v-flex>
                <v-btn color="primary" class="mx-0" small flat>
                Заванатажити
                </v-btn>
            </v-card>
        </v-flex>
        

    </v-card>
</div>  
</template>

<script>
export default {
  props: ['id'],
  data(){
      return{
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cicero_-_Musei_Capitolini.JPG/800px-Cicero_-_Musei_Capitolini.JPG',
        name:'Тич бог одинович',
        description: 'Плейбой, Філантроп, Технік-програміст',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam non at, itaque pariatur mollitia ducimus id eius repudiandae, minus unde dolore dolores aperiam! Vitae voluptatem odit voluptate debitis. Nisi, optio.'
      }
  }
}
</script>

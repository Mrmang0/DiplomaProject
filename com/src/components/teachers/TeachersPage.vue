<template>
  <div class="main-container">
    <v-layout wrap>
      <v-flex sm6 mb-5 px-2 v-for="(item,i) in teachers" :key="i">
        <teacher-item :teacher="item" > </teacher-item>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
  import TeacherItem from './TeacherItem'
  import { HTTP } from '@/api'
  export default {
    components: {
      TeacherItem
    },
    mounted(){
       return HTTP().get('api/teachers')
            .then(res => {
                this.teachers = res.data
                })
            .catch(err=>{
                throw new Error(err)
            })    
    },

    data(){
      return {
         teachers:[
        //   { 
        //     img: 'http://kom-fmd.at.ua/ja.jpg',
        //     name: 'Тичук Руслан Борисович',
        //     text: 'Викладач вищої категорії, старший викладач, голова циклової комісії, педагогічний стаж 15 р.',
        //   },
        //    { 
        //     img: 'http://kom-fmd.at.ua/IMG_3772_21.jpg',
        //     name: 'Долян Катерина Василівна ',
        //     text: 'Викладач вищої категорії, голова циклової комісії, педагогічний стаж 10 р.',
        //   },           
        //    { 
        //     img: 'http://kom-fmd.at.ua/IMG_3774_21.jpg',
        //     name: 'Платаш Богдан Олександрович',
        //     text: 'Викладач вищої категорії, педагогічний стаж 14 р.',
        //   },          
        //    { 
        //     img: 'http://kom-fmd.at.ua/IMG_3777_21.jpg',
        //     name: 'Присяжнюк Павло Михайлович',
        //     text: 'Викладач вищої категорії, старший викладач, педагогічний стаж 20 р.',
        //   },
        //   { 
        //     img: 'http://kom-fmd.at.ua/mvo.jpg',
        //     name: 'Маранчак Вікторія Олександрівна',
        //     text: 'Викладач вищої категорії, педагогічний стаж 16 р.',
        //   },
         ]
      }
    },   
  }

</script>

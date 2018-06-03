<template>
  <div class="main-container">   
    <v-card class="text-xs-center pa-4">
      <v-avatar size="300">
        <img :src="teacher.photoUrl" alt="">
      </v-avatar>
      <v-flex title mt-3>
        {{teacher.name+' '+teacher.surname+' '+teacher.patronomyc}}
      </v-flex>
      <v-flex disabled--text body-2 mb-4>
        {{teacher.smallDescription}}
      </v-flex>
      <v-flex text-xs-left px-5 mb-5 style="white-space: pre-wrap">
        {{teacher.aboutInfo}}
      </v-flex>
      <v-flex px-5>
        <v-flex text-xs-center title py-3>Матеріали</v-flex>
        <TeacherFileTree :folder="folder.folders" :files="folder.files" :pad="-30"></TeacherFileTree>        
      </v-flex>
    </v-card>
  </div>
</template>
<script>
import TeacherFileTree from './TeacherFileTree'
import { HTTP } from '@/api'

export default {
    components: {
        TeacherFileTree
    },
 props: ['id'],
      
    
    mounted(){    
       return HTTP().get(`api/teachers/${this.id}`)
            .then(res => {
                this.teacher = res.data
                })
            .catch(err=>{
                throw new Error(err)
            })    
    },
  data() {
    return {
      teacher: null,    
//       photo: 'http://kom-fmd.at.ua/ja.jpg',
//       name: 'Тичук Руслан Борисович',
//       description: 'Викладач вищої категорії, старший викладач, голова циклової комісії, педагогічний стаж 15 р. ',
//       text:`
// Освіта:
// 1998. ВДПУ ім. Михайла Коцюбинського. Спеціальність Фізика та основи інформатики. (диплом спеціаліста з відзнакою);

// 1999 Магістратура ВДПУ, спеціальність «Педагогіка та методика фізики»  кваліфікація «Магістр педагогічної освіти».  (диплом магістра з відзнакою);

// 2002. аспірантура Національного педагогічного університету ім. М. Драгоманова (Київ) за спеціальністю “Теорія та методика навчання фізики”.

// 2011 Харківський Національний університет радіоелектроніки, спеціальність «Програмне забезпечення автоматизованих систем», кваліфікація «інженер програміст». (диплом спеціаліста).

//  Дисципліни:
// «Фізика, астрономія»  (Шкільний курс фізики) – 140 год. 
// «Фізика» (2ОК) (загальний курс фізики) – 289 год.
// «Програмування» (4ОК) – 216 год.
// «Системне програмування» (3ОК) – 135 год.
// «Рецензування дипломних проектів» (4-ОК) –2 год/1 ст.
// «Керівництво дипломними проектами» (4-ОК) –13 год/ 1 ст.
// «Практика з програмування» (3ОК) – 108 год.
// Виконання обов’язків

// викладач спец. дисциплін;
// голова циклової комісії;
// керівник академічної групи;
// зав. кабінетом фізики 232;
// зав. лабораторією фізики 230`,
      folder: {
        folders: [{
          name: 'Програмування',
          folders: [{name:'Лабораторні роботи',files: [{name: 'Лабораторна №1.pdf'}]}],
          files: [{
            name: 'Список літератури.pdf'
          }],
        }],
        files: [{
          name: 'сайт з програмування Тичука Р.Б..pdf'
        }]
      }
    }
  }
}
</script>

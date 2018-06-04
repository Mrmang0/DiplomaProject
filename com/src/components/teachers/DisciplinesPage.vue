<template>
  <div class="main-container">
    <!-- ListView -->
    <v-layout row>
      <v-flex xs12 sm3>
        <v-card>
          <v-toolbar color="accent" dark>
            <v-toolbar-title>Предмети</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <v-list-group v-for="(item,i) in items" v-model="item.active" :key="item.title">
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-for="(subItem,index) in item.items" :key="subItem.title">
                <v-list-tile-content @click="click(i,index)">
                  {{ subItem.title }}
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-card>
      </v-flex>

      <!-- Body -->
      <v-flex>
        <v-card class="mx-3 py-4 px-2">
          <v-flex xs10 offset-xs1>
            <embed class="item-embed" :src="currentPDF" type="application/pdf">
          </v-flex>
          <v-flex my-4>
            <v-flex text-xs-center title py-3>Матеріали</v-flex>
            <DisciplinesFileTree :files="currentItem"></DisciplinesFileTree>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>



  </div>

</template>





<script>
  import DisciplinesFileTree from './DisciplinesFileTree'
  export default {
    components: {
      DisciplinesFileTree
    },
    methods: {
      click(i, arg) {
        this.currentDisciplineID = i;
        this.currentTopicID = arg;
      }
    },

    computed: {
      currentItem() {
        if (this.currentDisciplineID || this.currentTopicID || this.currentDisciplineID == 0 || this.currentTopicID == 0)
          return this.items[this.currentDisciplineID].items[this.currentTopicID].files;
      },
      currentPDF() {
        if (this.currentDisciplineID || this.currentTopicID || this.currentDisciplineID == 0 || this.currentTopicID == 0)
          return this.items[this.currentDisciplineID].items[this.currentTopicID].url;
      }
    },


    data() {
      return {
        currentDisciplineID: null,
        currentTopicID: null,
        items: [{
            title: 'Програмування',
            items: [{
                title: 'Быдлокодим на vue js a potom bats i snova govno',
                url: 'http://kom-fmd.at.ua/vz_plan.pdf',
                files: [{
                    name: 'sodsi.txt',
                    url: 'sosi.com'
                  },
                  {
                    name: 'foo.txt',
                    url: 'foo.com'
                  }
                ]
              },
              {
                title: 'Быдлокодим sна vue js a potom bats i snova govno',
                url: 'http://kom-fmd.at.ua/mr_plan.pdf',
                files: [{
                    name: 'sossi.txt',
                    url: 'sosi.com'
                  },
                  {
                    name: 'foo.txt',
                    url: 'foo.com'
                  }
                ]
              }
            ]
          },
          {
            title: 'Фізика',
            items: [{
              title: 'Быдлокодим на vue js a potom bats i snova govno',
              url: 'http://kom-fmd.at.ua/mr_plan.pdf',
              files: [{
                  name: 'sosi.txt',
                  url: 'sosi.com'
                },
                {
                  name: 'foo.txt',
                  url: 'foo.com'
                }
              ]
            }]
          },
          {
            title: 'Вища математика',
            items: [{
              title: 'Быдлокодим на vue js a potom bats i snova govno',
              url: 'http://kom-fmd.at.ua/vz_plan.pdf',
              files: [{
                  name: 'sosi.txt',
                  url: 'sosi.com'
                },
                {
                  name: 'foo.txt',
                  url: 'foo.com'
                }
              ]
            }]
          },
        ],
        folder: {
          folders: [{
            name: 'Програмування',
            folders: [{
              name: 'Лабораторні роботи',
              files: [{
                name: 'Лабораторна №1.pdf'
              }]
            }],
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

<style lang="scss" scoped>

.item-embed {
  text-align: center;
  width: 100%;
  height: 800px;
}

</style>
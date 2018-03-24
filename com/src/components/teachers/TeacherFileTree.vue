<template>
  <v-expansion-panel>
    <v-expansion-panel-content :style="{paddingLeft:tempPad+'px'}" v-for="(item,i) in folder" :key="i" v-model="expanded[i]">
      <div slot="header">
        <v-icon>{{expanded[i]?'folder_open':'folder'}}</v-icon>
        {{item.name}}
      </div>
      <v-card>
        <teacher-file-rec class="elevation-0" :folder="item.folders" :pad="tempPad"></teacher-file-rec>
        <v-flex py-2 pr-4 pl-5 d-block align-center v-for="(item,j) in item.files" :key="j">
          <v-icon d-inline-block>insert_drive_file</v-icon>
          <v-flex d-inline-block>{{item.name}}</v-flex>
          <v-btn color="primary" icon class="ma-0 right" flat small>
            <v-icon>file_download</v-icon></v-btn>
        </v-flex>
      </v-card>  
    </v-expansion-panel-content>
    <v-flex px-4 py-2 d-block v-for="(item,k) in files" :key="k">
        <v-icon>insert_drive_file</v-icon>
        <v-flex d-inline-block>{{item.name}}</v-flex>
        <v-btn color="primary" icon class="ma-0 right" flat small>
          <v-icon>file_download</v-icon></v-btn>
      </v-flex>
  </v-expansion-panel>
</template>


<script>
import TeacherFileTree from './TeacherFileTree'
export default {
  name: 'teacher-file-rec',
  components: {
    tft: TeacherFileTree
  },
  props: [
    'folder',
    'pad',
    'files'
  ],
//   computed: {
//     _pad: {
//       get(){ return this.tempPad},
//       set(value){this.tempPad=value+30}
//     }
//   },
  data() {
    return {
      expanded: {},
      tempPad: null
    }
  },

    mounted(){
        this.tempPad=this.pad+30;
        console.log(this.tempPad)}

}

</script>


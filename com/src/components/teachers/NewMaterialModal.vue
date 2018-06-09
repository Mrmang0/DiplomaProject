<template>
  <v-dialog v-model="dialog" max-width="800px">

    <v-btn dark flat color="primary" slot="activator">
      Додати тему
    </v-btn>
    <v-card>
      <v-flex title pa-4 text-xs-center>
        Додати тему
      </v-flex>

      <v-flex px-4>
        <v-text-field label="тема"></v-text-field>
        <v-btn @click="pickFile">додати pdf</v-btn>
        <input type="file" @change="onChange" ref="filePicker" style="display: none">
      </v-flex>

      <v-card-actions>
        <v-btn color="primary" flat @click.stop="dialog=false">закрити</v-btn>
        <v-btn color="primary" flat @click.stop="create">зберегти</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import axios from 'axios';

export default {
  data () {
    return {
      dialog: false,
      selectedFile: null,
    }
  },
  methods: {
    pickFile () {
      this.$refs.filePicker.click();
    },
    onChange (event) {
      const files = event.target.files;
      this.selectedFile = files[0];
    },
    create () {
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);

      axios.post('https://us-central1-images-storage-b58a6.cloudfunctions.net/uploadFile', fd)
        .then(response => {
          return response.data.media;
        })
        .then(url => {
          // твiй код для апi
        })
        .catch(e => {
          throw new Error(e);
        })
    }
  }
}
</script>

<style>

</style>

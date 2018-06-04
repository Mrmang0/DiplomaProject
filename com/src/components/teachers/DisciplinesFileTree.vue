<template>
  <v-card>
    <v-flex px-4 py-2 d-block v-for="(item,k) in files" :key="k">
      <v-icon>insert_drive_file</v-icon>
      <v-flex d-inline-block>{{item.name}}</v-flex>
      <v-btn color="primary" icon class="ma-0 right" flat small>
        <v-icon>file_download</v-icon>
      </v-btn>
    </v-flex>
  </v-card>
</template>



<script>
import DisciplinesFileTree from './DisciplinesFileTree'
export default {
  props: [
    'files'
  ],
}
</script>


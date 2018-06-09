<template>
  <v-dialog v-model="dialog" max-width="800px">
    
          <v-btn fab dark :color="isNew ? 'teal' : 'cyan'" slot="activator" absolute right>
            <v-icon dark v-if="isNew">add</v-icon>
            <v-icon dark v-else>edit</v-icon>
          </v-btn>
    <v-card>
      <v-flex subheading>
        {{ isNew ? 'Створити новину' : 'Редагувати новину' }}
      </v-flex>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="dialog=false">закрити</v-btn>
        <v-btn color="primary" flat @click.stop="editNewsItem">зберегти</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import _ from 'lodash';
import { HTTP } from '@/api';
export default {
  props: ['item', 'isNew'],
  data ()  {
    return {
      dialog: false,
      itemEditable: {}
    }
  },
  methods: {
    editNewsItem () {
      if (this.isNew) {

      } else {
        
      }
    }
  },
  mounted () {
    this.itemEditable = _.cloneDeep(this.item);
  }
}
</script>

<style>

</style>

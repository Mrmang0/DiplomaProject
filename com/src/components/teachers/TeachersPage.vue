<template>
  <div class="main-container">
    <v-layout wrap>
      <v-flex sm6 mb-5 px-2 v-for="(item,i) in 5" :key="i">
        <teacher-item > </teacher-item>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
  import TeacherItem from './TeacherItem'
  export default {
    components: {
      TeacherItem
    }
  }

</script>

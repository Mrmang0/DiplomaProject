<template>
<v-flex>
   <v-card class="py-4 mb-4" v-for="(item,i) in sr" :key="i" >
        <v-flex xs10 offset-xs1  >        
            <embed class="item-embed" :src="item" type="application/pdf">
        </v-flex>
   </v-card>
  </v-flex>
</template>


<script>
export default {
  data(){
      return{
          sr:[
             'http://kom-fmd.at.ua/mr_plan.pdf',
             'http://kom-fmd.at.ua/vr_plan.pdf'

          ]
      }
  }
}
</script>
<template>
  <div class="main-container">
     <v-card class="py-4 mb-4" v-for="(item,i) in sr" :key="i" >
        <v-flex xs10 offset-xs1  >        
            <embed class="item-embed" :src="item" type="application/pdf">
        </v-flex>
   </v-card>
  </div>
</template>


<script>

export default {
    data(){
      return{
         sr:[
             'http://kom-fmd.at.ua/mr_plan.pdf',
             'http://kom-fmd.at.ua/vz_plan.pdf'
         ]
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


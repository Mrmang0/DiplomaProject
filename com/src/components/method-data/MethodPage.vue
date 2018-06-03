<template>
  <div class="main-container">
     <v-card class="py-4 mb-4" v-for="(item,i) in methods" :key="i" >
        <v-flex xs10 offset-xs1  >        
            <embed class="item-embed" :src="item.url" type="application/pdf">
        </v-flex>
   </v-card>
  </div>
</template>


<script>
import { HTTP } from '@/api'

export default {
   mounted(){
       return HTTP().get('api/methodData')
            .then(res => {
                this.methods = res.data
                })
            .catch(err=>{
                throw new Error(err)
            })    
    },
    data(){
      return{
        methods: null,
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


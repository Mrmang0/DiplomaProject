<template>
    <div class="main-container">
      <news-item class="mb-5" v-for="(item,i) in news" :newItem="item" :key="i"></news-item>
    </div>
</template>

<script>
import NewsItem from './NewsItem'
import { HTTP } from '@/api'

export default {
    data(){
        return {
            news: []
        }
    },

    mounted(){
       return HTTP().get('api/news')
            .then(res => {
                this.news = res.data
                })
            .catch(err=>{
                throw new Error(err)
            })    
    },
    components:{
        NewsItem
    }
  
}
</script>

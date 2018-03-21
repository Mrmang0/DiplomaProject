<template>
    <div class="main-container">
      <news-item class="mb-5" v-for="(item,i) in 5" :key="i"></news-item>
    </div>
</template>

<script>
import NewsItem from './NewsItem'

export default {
    components:{
        NewsItem
    }
  
}
</script>

<template>
    <div class="main-container">
      <v-flex d-flex style="position: relative; height: 80px">
        <NewsModal style="flex-grow: 0" :isNew="true"></NewsModal>
      </v-flex>

      <news-item class="mb-5" v-for="(item,i) in 5" :newItem="item" :key="i"></news-item>
    </div>
</template>

<script>
import NewsItem from './NewsItem'
import { HTTP } from '@/api'
import NewsModal from './NewsEditModal';

export default {
  data() {
    return {
      news: []
    }
  },
  mounted() {
    return HTTP().get('api/news')
      .then(res => {
        this.news = res.data
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  components: {
    NewsItem,
    NewsModal
  }

}
</script>

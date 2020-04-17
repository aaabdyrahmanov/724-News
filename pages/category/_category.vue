<template>
  <div class="container">
    <div class="row">
      <NavDefault :options="extractOutCategory(id)" class="d-inline" />
    </div>
    <div v-if="getArticleByCategory(id)">
      <NewsCard
        v-for="(article, index) in getArticleByCategory(id)"
        :key="index"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavDefault from '@/components/NavDefault.vue'
import NewsCard from '@/components/NewsCard.vue'
export default {
  components: {
    NewsCard,
    NavDefault
  },
  computed: {
    id() {
      return this.$route.params.category
    },
    ...mapGetters({
      getArticleByCategory: 'sources/getArticleByCategory',
      extractOutCategory: 'sources/extractOutCategory'
    })
  },
  async fetch({ store }) {
    await store.dispatch('sources/getAllArticles')
  }
}
</script>

<style>
.row {
  border: 1px solid#e9ecef;
  padding-left: 120px;
  margin-top: -3px;
  border-radius: 0px 0px 20px 20px;
}
</style>

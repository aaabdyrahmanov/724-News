<template>
  <div class="container">
    <div class="row">
      <NavDefault :options="filterCategory" class="d-inline" />
    </div>
    <div>
      <NewsCard
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'
import NavDefault from '@/components/NavDefault.vue'

export default {
  components: {
    NewsCard,
    NavDefault
  },
  computed: {
    ...mapState({
      articles: (state) => state.sources.articles
    }),
    ...mapGetters({
      filterCategory: 'sources/filterCategory'
    })
  },
  async fetch({ store }) {
    await (store.dispatch('sources/getAllRestCountries'),
    store.dispatch('sources/getAllArticles'))
  }
}
</script>
<style></style>

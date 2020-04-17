<template>
  <div class="container">
    <form>
      <div class="form-group row align-items-center">
        <BaseSelectCat
          v-model="searchBy.category"
          class="col-3 my-2"
          label="Select a category"
          :options="filterCategory"
        />
        <BaseSelectCat
          v-model="searchBy.country"
          class="col-3 my-2"
          label="Select a country"
          :options="getAllC"
        />
        <BaseSelectCat
          v-model="searchBy.language"
          class="col-3 my-2"
          label="Select a Language"
          :options="getAllL"
        />
      </div>
    </form>
    <div>
      <div v-if="searchBy.category || searchBy.country || searchBy.language">
        <NewsCard
          v-for="(article, index) in getArticleBy3(
            searchBy.category,
            searchBy.country,
            searchBy.language
          )"
          :key="index"
          :article="article"
        />
      </div>
      <div v-else>
        <NewsCard
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BaseSelectCat from '@/components/BaseSelectCat.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  components: {
    BaseSelectCat,
    NewsCard
  },
  data() {
    return {
      results: null,
      searchBy: {
        category: '',
        country: '',
        language: ''
      }
    }
  },
  computed: {
    ...mapState({
      articles: (state) => state.sources.articles,
      restTotal: (state) => state.sources.restTotal
    }),
    ...mapGetters({
      filterCategory: 'sources/filterCategory',
      getArticleByCategory: 'sources/getArticleByCategory',
      getAllC: 'sources/getAllC',
      getAllL: 'sources/getAllL',
      getPage: 'sources/getPage',
      getArticleBy3: 'sources/getArticleBy3'
    })
  },
  async fetch({ store }) {
    await (store.dispatch('sources/getAllRestCountries'),
    store.dispatch('sources/getAllArticles'))
  },
  created() {
    console.log(this.getPage)
  }
}
</script>

<style scoped></style>

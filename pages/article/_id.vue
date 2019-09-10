<template>
  <div class="container">
    <NewsShow :article="getArticleById(id)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewsShow from '@/components/NewsShow.vue'
export default {
  components: {
    NewsShow
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapGetters({ getArticleById: 'sources/getArticleById' })
  },
  async fetch({ store }) {
    await store.dispatch('sources/getAllArticles')
  }
}
</script>

<style lang="scss" scoped></style>

/* eslint-disable vue/require-default-prop */
<template>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">{{ article.name }}</h5>
      <p class="card-text">
        {{ article.description }}
      </p>
      <button type="button" class="btn btn-secondary">
        <a :href="article.url" target="_blank" rel="noopener">Go to Page</a>
      </button>
    </div>
    <nuxt-link :to="'/article/' + article.id">
      <div class="card-footer">
        More details
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'NewsCard',
  props: {
    /* eslint-disable vue/require-default-prop */
    article: Object
  }
}
</script>

<style scoped></style>

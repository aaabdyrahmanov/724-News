<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">
        {{ article.name }}
        <nuxt-link :to="'/category/' + article.category">
          <a href="#" class="badge badge-info">{{ article.category }}</a>
        </nuxt-link>
      </h1>
      <hr class="my-4" />
      <p class="lead">
        <b> About us :</b> <br />
        <br />
        {{ article.description }}
      </p>
      <br />
      <p class="lead">
        <a
          class="btn btn-primary btn-lg ml"
          :href="article.url"
          role="button"
          target="_blank"
          >Go to Page</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsShow',
  props: {
    /* eslint-disable vue/require-default-prop */
    article: Object
  }
}
</script>
<style></style>

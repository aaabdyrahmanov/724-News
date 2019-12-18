<template>
  <div class="container">
    <div class="jumbotron bg-light">
      <h1 class="display-3">
        {{ article.name }}
        <nuxt-link :to="'/category/' + article.category">
          <a href="#" class="badge">{{ article.category }}</a>
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
        <a class="btn btn-lg" :href="article.url" role="button" target="_blank"
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
<style scoped>
.jumbotron {
  border: 1px solid#e9ecef;
  font-size: 20px;
  border-radius: 10px;
}
.badge,
.btn {
  background-color: white;
  border: 1px solid#e9ecef;
  font-size: 50px;
  border-radius: 100px;
  color: blue;
}
</style>

<template>
  <div>
    <!-- Image and text -->
    <nav class="navbar navbar-light bg-light d-flex mb-1 py-3">
      <div class="justify-content-start">
        <nuxt-link to="/" class="brand">
          <a class="navbar-brand" href="/">
            <img
              src="@/assets/img/breaking_news_logo.jpg"
              width="80"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            724 HOT NEWS
          </a>
        </nuxt-link>
      </div>
      <div class="d-flex justify-content-end">
        <nuxt-link to="/detailed" class="brand">
          <button type="button" class="btn bg-secondary btn-lg">
            Detailed Search
          </button>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>

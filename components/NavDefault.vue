<template>
  <div>
    <ul class="col">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="d-inline-flex justify-content-center p-3 m-3 bg-secondary"
        :value="option"
        :options="options"
        @click="updateValue"
      >
        <div v-if="option === 'Whole Articles'">
          <nuxt-link to="/"
            ><div class="text-white">Whole Articles</div></nuxt-link
          >
        </div>
        <div v-else>
          <nuxt-link :to="'/category/' + option">
            <div class="text-white">
              {{ option }}
            </div>
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavDefault',
  props: {
    /* eslint-disable vue/require-default-prop */
    options: Array,
    /* eslint-disable vue/require-default-prop */
    value: {
      type: [String, Number]
    }
  },
  methods: {
    updateValue(option) {
      this.$emit('input', option.target.value)
    }
  }
}
</script>

<style scoped></style>

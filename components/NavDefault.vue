<template>
  <div>
    <ul class="col">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="list d-inline-flex justify-content-center p-1 m-4"
        :value="option"
        :options="options"
        @click="updateValue"
      >
        <div class="choices">
          <nuxt-link :to="'/category/' + option">
            {{ option }}
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

<style scoped>
.list {
  border: 1px solid#e9ecef;
  font-size: 20px;
  border-radius: 100px;
}
.choices :hover {
  text-decoration: none;
}
</style>

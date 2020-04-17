<template>
  <div>
    <label class="mr-sm-2">{{ label }}</label>
    <select
      id="inlineFormCustomSelect"
      :value="value"
      v-bind="$attrs"
      class="custom-select"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelectCat',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    /* eslint-disable vue/require-default-prop */
    value: [String, Number]
  }
}
</script>

<style scoped></style>

<template>
  <div ref="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabItem",
  props: {
    label: {
      type: String,
      default: "tab"
    },
    k: {
      type: Number
    }
  },
  mounted() {
    this.$refs.item.setAttribute("label", this.label);
  }
};
</script>

<style lang="scss" scoped>
</style>


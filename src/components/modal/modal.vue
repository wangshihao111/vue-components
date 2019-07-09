<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "modal",
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>


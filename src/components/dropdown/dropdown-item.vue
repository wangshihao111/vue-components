<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  flex: 0 0 30px;
  padding: 0 8px;
  line-height: 30px;
  font-size: 13px;
  color: #666;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    color: #409eff;
  }
}
</style>

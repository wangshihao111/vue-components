<template>
  <div
    class="dropdown-menu left"
    @click="onMenuClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    onMenuClick(e) {
      this.$emit("select", e.target.innerHTML);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.dropdown-menu {
  position: relative;
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  // align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: rgba(200, 200, 200, 0.1);
  @include all-border-1px(#eee, 0);
  &.left {
    float: left;
    align-items: flex-start;
  }
  &.right {
    float: right;
    align-items: flex-end;
  }
}
</style>


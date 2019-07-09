<template>
  <button
          class="m-btn"
          :class="type"
          ref="btn"
          @mousedown="onMouseDown"
          @mouseup="onMouseUp"
          @touchstart="onMouseDown"
          @touchend="onMouseUp"
          @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {},
  methods: {
    onMouseDown() {
      const btn = this.$refs.btn;
      btn.style.opacity = 0.8;
      this.$emit("mousedown");
    },
    onMouseUp() {
      const btn = this.$refs.btn;
      btn.style.opacity = 1;
      this.$emit("mouseup");
    }
  }
};
</script>

<style lang="scss" scoped>
.m-btn {
  width: fit-content;
  min-width: 60px;
  height: 26px;
  padding: 0 6px;
  font-size: 12px;
  outline: none;
  border: none;
  border-radius: 3px;
  transition: all 0.2s;
  margin: 0 5px;
  cursor: pointer;
  &.primary {
    color: #fff;
    background: #409eff;
    border: 1px solid #409eff;
  }
  &.default {
    background: #eee;
    color: #666;
    border: 1px solid #ccc;
  }
  &.warning {
    background: #f0ad4e;
    color: #fff;
    border: 1px solid #f2ae40;
  }
  &.success {
    background: #28a745;
    color: #fff;
    border: #28a745;
  }
}
</style>


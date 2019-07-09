<template>
  <div class="dropdown">
    <div
      class="title"
      @click="onTitleClick"
    >
      <slot></slot>
    </div>
    <transition name="menu">
      <div
        class="menu clearfix"
        v-show="canShowMenu"
        @click="onMenuClick"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canShowMenu: false
    };
  },
  methods: {
    onTitleClick() {
      this.canShowMenu = !this.canShowMenu;
    },
    onMenuClick() {
      this.canShowMenu = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  line-height: 0;
  clear: both;
  zoom: 1;
}
.dropdown {
  position: relative;
  width: 100px;
  height: auto;
  .title {
    width: 90px;
    height: 30px;
    padding: 0 5px;
    line-height: 30px;
    font-size: 14px;
    border-radius: 3px;
    color: #666;
    background-color: aquamarine;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .menu {
    position: absolute;
    top: 32px;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    transform-origin: top;
  }

  .menu-enter,
  .menu-leave-to {
    // height: 0;
    transform: scaleY(0);
  }
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.3s;
  }
  .menu-enter-to,
  .menu-leave {
    // height: auto;
    transform: scaleY(1);
  }
}
</style>


<template>

  <transition name="fade">
    <slot></slot>
  </transition>

</template>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 3s;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>


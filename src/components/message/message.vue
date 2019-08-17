<template>
  <transition name="message">
    <div class="container" v-show="visible" @click="closeImmediatelay">
      {{content}}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "提示信息"
    },
    timeout: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      visible: true
    };
  },
  mounted() {
    this.showMsg();
  },
  methods: {
    showMsg() {
      // this.visable = true;
      // this.$nextTick(() => this.$emit("show"));
      // const animTimeout = this.timeout - 200;
      // this.showTime = setTimeout(() => {
      //   this.visable = false;
      // }, animTimeout);
      // this.timer = setTimeout(() => {
      //   this.$emit("close");
      // }, this.timeout);
      setTimeout(() => this.$emit('close'), 2000)
    },
    closeImmediatelay() {
      this.$emit("close");
    }
  },
  destroyed() {
    clearTimeout(this.timer);
    clearTimeout(this.showTime);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.container {
  position: fixed;
  top: 40px;
  left: 50%;
  width: 90%;
  max-width: 450px;
  height: 54px;
  margin: 0 auto;
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 54px;
  border-radius: 5px;
  text-indent: 20px;
  color: #233;
  white-space: nowrap;
  text-overflow: ellipsis;
  @include all-border-1px(#ccc, 0);
  box-shadow: 1px 2px 1px 1px #eee;
  background: #fff;
  &.message-enter,
  &.message-leave-to {
    transform: translate(-50%, -150%);
    opacity: 0;
  }
  &.message-enter-active,
  &.message-leave-active {
    transition: all 0.2s;
  }
}
</style>


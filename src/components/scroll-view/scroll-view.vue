<template>
  <div
    class="__scroll__"
    ref="scroll"
  >
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: {
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {};
  },
  methods: {
    scrollToElement(el, time, offsetX, offsetY, easing) {
      this.scroll.scrollToElement(el, time, offsetX, offsetY, easing);
    },
    _initScroll() {
      if (!this.$refs.scroll) {
        return;
      }
      this.scroll = new BScroll(this.$refs.scroll, {
        click: this.click,
        probeType: this.probeType
      });
      this.listenScroll &&
        this.scroll.on("scroll", e => {
          this.$emit("scroll", e);
        });
      this.scroll.on("scrollEnd", e => {
        this.$emit("scrollEnd", e);
      });
    }
  },
  mounted() {
    this._initScroll();
  },
  destroyed() {
    this.scroll.destroy();
  }
};
</script>

<style lang="scss" scoped>
.__scroll__ {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<template>
  <div class="container" ref="container">
    <div class="tab-header">
      <div class="title"
           v-for="(item, index) in tabs" :key="item.key"
           @click="switchTab(index)"
           :class="{active: index === currentTab}">
        {{item.label}}
      </div>
      <div class="indicator" ref="indicator"></div>
    </div>
    <div class="tab-body">
      <div class="tab-group" ref="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "@/helper/utils";
export default {
  name: "tabs",
  props: {
    defaultTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabs: [],
      currentTab: 0
    };
  },
  mounted() {
    this.currentTab = this.defaultTab;
    this._initTabs();
    this._resizeFun = debounce(this._initTabs, 500);
    window.addEventListener("resize", this._resizeFun);
  },
  destroyed() {
    window.removeEventListener("resize", this._resizeFun);
  },
  methods: {
    switchTab(index) {
      this.currentTab = index;
      this.$refs.indicator.style.left = index * this.indicatorWidth + "px";
      this.$refs.body.style.left = -index * this.width + "px";
      this.$emit("switch", index);
    },
    _initTabs() {
      this.tabs = [];
      const width = (this.width = this.$refs.container.clientWidth);
      let tabGroup = this.$refs.body;
      let children = (this.tabGroup = tabGroup.children);
      for (let element of children) {
        let label = element.getAttribute("label");
        this.tabs.push({ key: element.k, label });
        element.classList.add("tab-item");
        element.style.width = width + "px";
      }
      const indicator = this.$refs.indicator;
      const indicatorWidth = (this.indicatorWidth = width / children.length); // 指示器的宽度
      // 设置指示器的样式
      indicator.style.width = indicatorWidth / 2 + "px";
      indicator.style.margin = `0 ${indicatorWidth / 4}px`;
      indicator.style.left = this.defaultTab * indicatorWidth + "px";
      // 设置内容样式
      tabGroup.style.left = -width * this.defaultTab + "px";
      tabGroup.style.width = width * children.length + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";

.container {
  width: 100%;
  height: 100%;
  .tab-header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 1px;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    @include border-1px(#ccc, bottom);
    .indicator {
      position: absolute;
      bottom: 0;
      display: block;
      height: 2px;
      box-sizing: border-box;
      background-clip: content-box;
      background-color: #409eff;
      transition: left 0.3s;
    }
    .title {
      position: relative;
      flex: 1;
      height: 100%;
      line-height: 40px;
      text-align: center;
      color: #666;
      font-size: 14px;
      transition: color 0.3s;
      &.active {
        color: #409eff;
      }
    }
  }
  .tab-body {
    position: relative;
    width: 100%;
    height: calc(100% - 45px);
    margin-top: 5px;
    overflow: hidden;
    .tab-group {
      position: absolute;
      height: 100%;
      transition: left 0.3s;
      &::after {
        display: block;
        content: " ";
        height: 0;
        line-height: 0;
        clear: both;
        zoom: 1;
      }
    }
    .tab-item {
      float: left;
      height: 100%;
    }
  }
}
</style>


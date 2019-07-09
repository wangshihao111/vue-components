<template>
  <transition
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
              @after-leave="afterLeave">
    <Modal class="alert-container">
      <div
           class="mask"
           ref="mask"></div>
      <div
           class="alert"
           ref="confirm">
        <h3 class="title">{{title}}</h3>
        <div class="content">
          <p class="text">{{text}}</p>
        </div>
        <div class="footer">
          <MButton
                   class="btn"
                   @click="onConfirmClick">{{confirmText}}</MButton>
        </div>
      </div>
    </Modal>
  </transition>
</template>

<script>
import Modal from "@/components/modal/modal";
import MButton from "@/components/m-button/m-button";
import mixin from "./mixin";
export default {
  name: "alert",
  mixins: [mixin],
  props: {
    title: {
      type: String,
      default: "警告"
    },
    text: {
      type: String,
      default: "操作不可撤销，点击确定继续"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  components: {
    Modal,
    MButton
  },
  methods: {
    onConfirmClick() {
      this.$emit("confirm");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./mixin.scss";
.alert-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  .mask {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
  .alert {
    width: 90%;
    max-width: 500px;
    height: auto;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    z-index: 1;
    .title {
      margin: 0;
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      font-size: 14px;
      color: #666;
    }
    .content {
      width: 100%;
      min-height: 60px;
      position: relative;
      @include border-1px(#ddd, top);
      .text {
        margin: 0;
        padding-top: 10px;
        padding-left: 20px;
        font-size: 13px;
        color: #555;
      }
    }
    .footer {
      position: relative;
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      @include border-1px(#ddd, top);
      .btn {
        margin-right: 16px;
      }
    }
  }
}
</style>

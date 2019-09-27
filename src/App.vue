<template>
  <div id="app">
    <Loading type="circle" />
    <Confirm v-show="confirm" @cancel="closeConfirm" @confirm="onConfirm"></Confirm>
    <Alert v-show="alert" @confirm="alert=false"></Alert>
    <Dropdown v-if="dorpdown">
      <span>打开菜单ledsas</span>
      <DropdownMenu slot="dropdown">
        <DropdownItem>天津饭</DropdownItem>
        <DropdownItem>排骨饭</DropdownItem>
        <DropdownItem>饺子</DropdownItem>
        <DropdownItem>胖次</DropdownItem>
        <DropdownItem>666</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Button @click="confirm=!confirm">显示confirm</Button>
    <Button @click="alert=!alert" type="primary">alert</Button>
    <div style="width: 100%; height: 50%;">
      <Tabs :defaultTab="1">
        <TabItem :k="0" label="one">
          ；v阿斯顿女阿斯顿
        </TabItem>
        <TabItem :k="1" label="two">22345ed</TabItem>
        <TabItem :k="2" label="three">3234erst</TabItem>
        <TabItem :k="3" label="three">3234ert</TabItem>
        <TabItem :k="4" label="three">32324ert</TabItem>
      </Tabs>
    </div>
    <Button @click="createMsg">createmsg</Button>
    <svg-icon icon="left" size="32" class="svg"></svg-icon>
    <div class="wrapper">
      <div style="height: 50px"></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Loading from "./components/loading/Loading";
import Dropdown from "./components/dropdown/dropdown";
import DropdownMenu from "./components/dropdown/dropdown-menu";
import DropdownItem from "./components/dropdown/dropdown-item";
import Confirm from "./components/modal/confirm";
import Alert from "./components/modal/alert";
import Button from "@/components/m-button/m-button";
import Tabs from "@/components/tabs/tabs";
import TabItem from "@/components/tabs/tab-item";
import {http} from './plugins/http'
import {mapTo} from 'rxjs/operators';

export default {
  name: "app",
  components: {
    Loading,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Confirm,
    Alert,
    Button,
    Tabs,
    TabItem,
  },
  data() {
    return {
      dorpdown: false,
      confirm: false,
      alert: false
    };
  },
  watch: {
  },
  mounted() {
    http.post('http://localhost:3030/user', {age: 189}).subscribe(r => console.log(r));
  },
  methods: {
    closeConfirm() {
      this.confirm = false;
    },
    onConfirm() {
      this.confirm = false;
    },
    createMsg() {
      let _this = this;
      this.$msg({
        content: "666",
        timeout: 2000,
        onShow() {
          console.log("show", _this.$el);
        },
        onClose() {
          console.log("close");
        }
      });
    }
  },
};
</script>

<style lang="scss">
.svg {
  fill: blue;
}
.wrapper {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  border: 1px solid #ccc;
  // justify-content: space-around;
  div {
    width: 30%;
    height: 80px;
    margin: 1.66%;
    background: #0f0;
    align-self: center;
  }
}
</style>

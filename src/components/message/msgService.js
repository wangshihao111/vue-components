import Vue from 'vue';

import Message from './message';

const MsgBox = {};

MsgBox.install = function(Vue) {
  const Msg = Vue.extend(Message);

  Vue.prototype.$msg = function(config) {
    const props = {};

    if (typeof config === 'string') {
      props.content = config;
    } else {
      Object.assign(props, config);
    }
    const msg = new Msg({
      propsData: props
    });

    /*
    * 挂载组件
    * 由于vue挂载后会替换挂载点dom节点，所以最终需要移除的dom是挂载后的dom
    * */
    const el = document.createElement('div'); // 创建挂载点
    document.body.appendChild(el);
    const element = msg.$mount(el).$el;
    // 监听事件
    msg.$on('show', () => {
      config.onShow && config.onShow();
    });
    msg.$on('close', () => {
      msg.$destroy();
      setTimeout(() => {
        document.body.removeChild(element);
      }, 200);
      config.onClose && config.onClose();
    });
  };
};

Vue.use(MsgBox);

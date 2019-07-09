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
      const { onShow, onClose, ...propData } = config;
      Object.assign(props, propData);
    }
    const msg = new Msg({
      propsData: props
    });

    // 挂载组件
    const el = msg.$mount().$el;
    document.body.appendChild(el);
    // 监听事件
    msg.$on('show', () => {
      console.log('created');
      config.onShow && config.onShow();
    });
    msg.$on('close', () => {
      msg.$destroy();
      document.body.removeChild(el);
      config.onClose && config.onClose();
    });
  };
};

Vue.use(MsgBox);

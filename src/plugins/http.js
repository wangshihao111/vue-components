import { catchError, map } from "rxjs/operators";
import {createHttp} from './request'

function processResponse(response) {
  switch (response.status) {
    case 0:
      return new Error("跨域访问不允许");
    case 200:
      return response.response;
    case 403:
      return new Error("没有权限访问该接口");
    case 404:
      return new Error("访问的接口不存在");
    default:
      break;
  }
}

const getFinalUrl = url => (url.startsWith("http") ? url : baseUrl + url);

const pipes = [
  map(res => processResponse(res)),
  catchError(e => console.log(e))
];

const baseConfig = {
  // url?: string;
  //   body?: any;
  //   user?: string;
  async: true,
  //   method?: string;
  //   headers?: Object;
  timeout: 10000,
  //   password?: string;
  //   hasContent?: boolean;
  //   crossDomain?: boolean;
  withCredentials: false,
  //   createXHR?: () => XMLHttpRequest;
  //   progressSubscriber?: Subscriber<any>;
  responseType: 'json'
};

const http = createHttp(baseConfig);
http.usePipes(pipes);
http.useRequestInterceptor((config) => {
  // config.headers = {'Content-Type': 'application/json,charset=utf-8'}
  return config;
});

const Plugin = {
  install(Vue) {
    Vue.prototype.$http = http;
  }
};

export { http, Plugin };

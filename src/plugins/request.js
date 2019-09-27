import { ajax } from "rxjs/ajax";

const defaultConfig = {
  async: true,
  timeout: 10000,
  withCredentials: false,
  responseType: 'json'
};

const getSearchStr = params => {
  let query = "";
  if (toString.call(params) === "[object Object]") {
    const keys = Object.keys(params);
    if (!keys.length) {
      return query;
    }
    query = "?";
    keys.forEach(k => {
      query += `${k}=${params[k]}&`;
    });
    query = query.slice(0, query.length - 1);
  }
  return query;
};

function compose(funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)) );
}

function createHttp(baseConfig={}) {
  return {
    _callbacks: [],
    pipes: [],
    useRequestInterceptor(func) {
      this._callbacks.push(func)
    },
    usePipes(arr) {
      this.pipes = arr;
    },
    _getFinalConfig(config) {
      const finalFunction = compose(this._callbacks);
      return finalFunction(config);
    },
    get(url, options) {
      const {params, ...config} = this._getFinalConfig({...options})
      return ajax({
        ...baseConfig,
        url: url + getSearchStr(params),
        ...config
      }).pipe(...this.pipes);
    },
    post(url, body = null, options) {
      const {body: fBody, ...fOptions} = this._getFinalConfig({body, ...options});
      return ajax({
        ...baseConfig,
        url,
        method: "POST",
        body: fBody,
        ...fOptions
      }).pipe(...this.pipes);
    },
    put(url, body, options) {
      const {body: fBody, ...fOptions} = this._getFinalConfig({body, ...options});
      return ajax({
        ...baseConfig,
        url,
        method: "PUT",
        body: fBody,
        ...fOptions
      }).pipe(...this.pipes);
    },
    delete(url, body, options) {
      const {body: fBody, ...fOptions} = this._getFinalConfig({body, ...options});
      return ajax({
        ...baseConfig,
        url,
        method: "DELETE",
        body: fBody,
        ...fOptions
      }).pipe(...this.pipes);
    },
    ajax
  };
}

 export const http = createHttp(defaultConfig);

export {
  createHttp
}
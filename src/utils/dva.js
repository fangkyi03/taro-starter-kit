import Taro from '@tarojs/taro'
import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app;
let store;
let dispatch;

function setValue (state,{payload}) {
  console.log('输出setValue')
  return {...state,...payload}
}

function createApp(opt) {
  // redux log
  opt.onAction = [createLogger()]
  app = create(opt)

   // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {}
  }
  if (!global.registered) opt.models.forEach(model => {
    model.state.isShow = true
    model.reducers.setValue = setValue;
    app.model(model)
  })
  global.registered = true
  app.start()

  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch
  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}
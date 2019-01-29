import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import dva from './utils/dva'
import Index from './pages/index'
import './app.scss'
import DevTool from './model/devTool'
import Fetchs from './model/fetch'
import NetTool from './command/netTool'

require('./command/initalApi')

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

const tranModel = modelList => modelList.map(e => ({
  namespace: e,
  state: {
    isShow: true
  },
  reducers: {},
  effect: {},
  subscriptions: {}
}))

const dvaApp = dva.createApp({
  initialState: {},
  models: [
    DevTool,
    ...tranModel([
      'Index'
    ]),
    Fetchs({
      netTool: NetTool
    })
  ]
})

const store = dvaApp.getStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/My/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#262626",
      backgroundColor: "#ffce09",
      borderStyle: "black",
      position: "bottom",
      list: [
        {
          pagePath: "pages/index/index",
          text:"首页",
          // iconPath: "assets/images/tabbar/tab_index.png",
          // selectedIconPath: "assets/images/tabbar/tab_index_selected.png",
        },
        {
          pagePath: "pages/My/index",
          text:"我的",
          // iconPath: "/images/tabbar/tab_user.png",
          // selectedIconPath: "/images/tabbar/tab_user_selected.png",
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

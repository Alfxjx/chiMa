import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/about/about',
      'pages/choose/choose'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      backgroundColor:'#fff',
      borderStyle:'white',
      list:[
        {
          pagePath:'pages/index/index',
          text:'主页',
          iconPath: './images/botIcon1.png',
          selectedIconPath: './images/botIcon1-active.png'
        },
        {
          pagePath: 'pages/choose/choose',
          text: '功能',
          iconPath: './images/botIcon2.png',
          selectedIconPath: './images/botIcon2-active.png'
        },
        {
          pagePath: 'pages/about/about',
          text: '关于',
          iconPath: './images/botIcon3.png',
          selectedIconPath: './images/botIcon3-active.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

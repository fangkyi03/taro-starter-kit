import Taro, { Component, login } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import styles from './index.scss'
import api from '../../command/api';

@connect(({Index})=>({...Index}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount() {
    console.log('输出cdm', Taro.getApp())
  }
  
  componentWillUnmount () { }

  componentDidShow () {
    api.send(this,[
      api.SysCategoryController_ADMIN().selectBatchCategoryUsingPOST()({
        onError:(data)=>{
          console.log('输出网络错误',data)
        }
      })
    ])
  }

  componentDidHide () { }

  goToDemo = opt => {
  }

  render () {
    console.log('输出',this.props)
    return (
      <View className={styles.main}>
      </View>
    )
  }
}

export default Index

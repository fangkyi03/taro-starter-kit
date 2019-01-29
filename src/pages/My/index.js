/* eslint-disable import/no-commonjs */
import Taro, { Component } from '@tarojs/taro';
import {View,Button} from '@tarojs/components'
import styles from './index.scss'

class My extends Component {

  config = {
      navigationBarTitleText: '我的'
  }
 
  onButtonDown = () =>{
    Taro.showToast({title:'输出测试'})
  }

  render() {
    return (
        <View className={styles.main}>
          <Button onClick={this.onButtonDown}>
            按钮
          </Button>
        </View>
    )
  }
}


export default My
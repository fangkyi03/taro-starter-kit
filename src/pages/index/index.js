import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './index.scss'
import api from '../../command/api';
import createDva from '../../command/createDva';
import { connect } from '@tarojs/redux';

// @connect(({Index})=>({...Index}))
@createDva(['Index'])
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  
  componentWillUnmount () { }

  componentDidShow (option) {
    console.log("option", option);
    api.send(this,[
      api.SysCategoryController_ADMIN().selectBatchCategoryUsingPOST()({
        onError:()=>{
          api.setValue(this, "Index",{a:'1'});
        }
      })
    ])
    setTimeout(()=>{
      api.setValue(this, "Index", { a: 2 });
    },1)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('页面刷新')
  }

  componentDidHide () { }

  goToDemo = () => {
  }

  render () {
    console.log('render输出',this.props)
    debugger
    return (
      <View className={styles.main}>
        <Text>{this.props.a}</Text>
      </View>
    )
  }
}

export default Index

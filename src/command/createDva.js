import {connect} from '@tarojs/redux'
import Taro from '@tarojs/taro'
import api from './api'

export default (modelList = [], option = {},isClear = true) =>{
  class DvaView extends Taro.Component {

    constructor(props) {
      super(props);
      this.state = {
        isShow:false
      }
    }
    
    componentDidMount() {
      console.log('dva输出')
    }
    
    componentWillUnmount() {
      if (this.props.isClear && typeof this.props.modelList !== 'function') {
        api.clearList(this, this.props.modelList)
      }
    }

    test() {

    }
    
    render () {
      console.log('输出log',this.props)
      debugger
      const {Component,modelList,...arg} = this.props
      return <Component modelList={modelList} />
    }
  }

  return (Component) =>connect((state)=>{
    let obj = {}
    if (typeof modelList == 'function') {
      obj = modelList(state)
    }else {
      modelList.forEach((e) => {
        obj = { ...obj, ...state[e] }
      })
    }
    return { ...obj, Component, modelList, isClear}
  }, null, null, option)(DvaView)
}

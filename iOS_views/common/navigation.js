/*
  实现功能： 封装导航器初始化设置

  包含组件：Navigator

  外部传入：
    component  需要展示的页面组件
    route对象  必须添加component属性；如果需要船只可以添加passProps属相
*/

import React, {Component} from 'react';
import {
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'

export default class Navigation extends Component {
  render(){
    let rootRoute = {
      component: this.props.component,
      passProps: {},
      title: '',
    }

    return(
      <Navigator
        style={{flex: 1}}
        initialRoute={rootRoute}
        navigationBarHidden = {true}
        configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
        renderScene={(route, navigator  ) => {
          let Component = route.component;
          return(
            <View style={{flex: 1}}>
              <Component
                navigator={navigator}
                route={route}
                {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
}

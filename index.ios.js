/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import BookList from './iOS_views/book/book_list';
import Navigation from './iOS_views/common/navigation';
//隐藏状态栏


class DoubanProject extends Component {
  constructor(props) {
    super(props);
    StatusBar.setHidden(true)
    this.state = {
      selectedTab : "图书",
    }
  };

  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          title = '图书'
          selected = {this.state.selectedTab === '图书'}
          onPress={()=>{
            this.setState({
              selectedTab: '图书'
            })}}>
          <Navigation component={BookList}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title = '电影'
          selected = {this.state.selectedTab === '电影'}
          onPress={()=>{
            this.setState({
              selectedTab: '电影'
            })}}>
          <View style={{flex : 1, backgroundColor : 'cyan'}}></View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  };
}
// export default class DoubanProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js!!!
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('DoubanProject', () => DoubanProject);

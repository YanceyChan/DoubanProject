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
StatusBar.setHidden(true);

class DoubanProject extends Component {
  constructor(props) {
    super(props);
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


AppRegistry.registerComponent('DoubanProject', () => DoubanProject);

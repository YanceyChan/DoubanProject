/*
  实现功能：定义多个属性，在项目中会使用的一些功能。包括：获取屏幕尺寸、loading组件、GET请求方法

  包含组件：

  外部传入：
    GET请求方法需要从外部传入url、请求成功的回调方法、请求失败的回调方法
*/

import React, {Component} from 'react';
import {
  Dimensions, //用于获取设备屏幕的宽高
  ActivityIndicator
} from 'react-native';

export default {
  windowSize : {
    width : Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  getRequest(url, successCallback, failCallback) {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => successCallback(responseData))
    .catch((error) => failCallback(error));
  },

  loading: <ActivityIndicator style ={{margin: 200}}/>,
}

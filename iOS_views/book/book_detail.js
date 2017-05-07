/*
  图书详情

  实现功能：展示图书详情，包括：图书信息、图书简介、作者简介

  包含组件：基本组件、BookItem（图书信息使用BookItem展示）

  外部传入：

  需要使用字段：
    image 图书缩略图
    title 图书名称
    publisher 出版社
    author 作者
    price 价格
    pages 图书总页数
    summary 图书简介
    author_intro 作者简介

 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import ServiceURL from './../common/service';
import Util from './../common/util';
import Header from './../common/header';
import BookItem from './book_item';

export default class BookDetail extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      bookData: null //图书对象详细信息
    };
  }

  getData() {

    var that = this;
    var url = ServiceURL.book_detail_id + this.props.bookID;
    Util.getRequest(url, (data)=>{

      this.setState({
        bookData: data
      })
    }, (error)=>{
        alert(error);
    })
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.bookData?
          <View>
            <Header
              initObj={{bookName:'图书', barTitle:this.state.bookData.title}}
              navigator={this.props.navigator}/>
            <BookItem book={this.state.bookData}/>
            <View>
              <Text style={styles.title}>图书简介</Text>
              <Text style={styles.text}>{this.state.bookData.summary}</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>作者简介</Text>
              <Text style={styles.title}>{this.state.bookData.author_intro}</Text>
            </View>
            <View style={{height: 55}}></View>
          </View>
          : Util.loading
        }
      </ScrollView>
    );
  }

  componentDidMount() {
    //请求图书详情
    this.getData();
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000d22',
  }
});

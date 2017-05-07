/*
  图书列表模块：搜索栏、图书列表
  图书列表的内容：通过调用图书搜索接口获得多条图书数据
  图书列表Item是单独封装的
*/

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,
} from 'react-native';

import Util from './../common/util';
import SearchBar from './../common/searchBar';
import ServiceURL from './../common/service';
import BookItem from './book_item';
import BookDetail from './book_detail';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow!==newRow
    });
    this.state = {
      //dataSource
      dataSource: ds,
      //网络请求状态标识
      show: false,
      //作用：1、搜索接口需要设置搜索内容。2、点击搜索按钮时，修改关键字内容，重新请求数据，重新渲染
      keywords: '教程',
      selectedBookID : 2059252
    }
  }

  getData() {
    //开启loading，每次搜索时都需要重新下载显示数据
    this.setState({
      show: false
    });

    //请求数据
    var that = this;
    var url = ServiceURL.book_search + '?count=20&q=' + this.state.keywords;
    Util.getRequest(url, (data)=>{
      //请求成功毁掉函数
      /*
       如果没有想过书籍，使用alter提示
       https://api.douban.com/v2/book/search?count=20&q=react
       {"count":0, "start":0, "total":0, "books":[]}
      */

      if (!data.books || data.books.length == 0) {
        return alert("未查询到相关书籍")
      }
      //设置下载状态和数据源
      // alert(data.books.length);
      var ds = new ListView.DataSource({
        rowHasChanged: (oldRow, newRow) => oldRow!==newRow
      });

      that.setState({
        show: true,
        dataSource: ds.cloneWithRows(data.books)
      });
    }, (error)=>{
      alert(error);
    })
  }

  //TextInput的onChangeText事件处理方法
  _changeText(text) {
    this.setState({
      keywords: text
    });
  }

  _searchPress() {
    // alert(this.state.keywords);
    this.getData();
  }

  _showDetail(bookID) {
    // alert(bookID);
    var detailRoute = {
      component: BookDetail,
      passProps: {
        // bookID: 2059252
        bookID: bookID
      }
    }

    this.props.navigator.push(detailRoute);
  }

  render(){
    return(
      <ScrollView style={{flex: 1}}>
        <SearchBar
          placeholder='请输入图书名称'
          onPress={()=>{this._searchPress()}}
          onChangeText={(text)=>{this._changeText(text)}}
        />
        {
          //请求数据是显示loading，数据请求成功后显示listView
          this.state.show?
            <ListView
              dataSource={this.state.dataSource}
              initialListSize={10}
              renderRow={this._renderRow.bind(this)}//绑定this，进组件
              renderSeparator={this._renderSeparator}/>
            :Util.loading
        }
      </ScrollView>
    );
  };

  componentDidMount() {
    //请求数据
    this.getData();
  };

  _renderRow(rowData) {
    var bookid = rowData.id;
    return <BookItem book={rowData} onPress={()=>{
      this._showDetail(bookid)
    }}/>
  };

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    var styles = {
      height: 1,
      backgroundColor: '#ccc',
    }
    return <View style={styles} key={sectionID+rowID} />

  }
}

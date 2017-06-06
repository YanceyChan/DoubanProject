 /*
    接口 API
    基于豆瓣开放API的图书、电影
*/

var BaseURL = "https://api.douban.com/v2/";
// var book_search = BaseURL + "book/search";
// var book_detail_id = BaseURL + 'book/';
// var movie_search = BaseURL + 'movie/search';
export default {
  /*
    图书搜索
    image 图书缩略图
    title 图书名称
    publisher 出版社
    author 作者
    price 价格
    pages 图书总页数
  */
  book_search : BaseURL + "book/search",

  book_detail_id : BaseURL + 'book/',
  /*
    电影搜索
    images.medium 电影图像
    title 电影名称
    casts 电影演员
    rating.average 电影评分
    year 电影上映时间
    genres 电影标签
    alt 电影详情url
  */
  movie_search : BaseURL + 'movie/search',
}
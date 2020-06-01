// pages/posts/post.js
var postData = require("../../data/post-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"Apr 02 2018",
    title:[
      "红豆生南国",
      "春来发几枝"
    ],
    imgSrc:[
      "/image/2.png",
      "/image/4.png"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /* 参数event不能缺少 */
  onPostTap: function(event){
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?id='+postId,
      complete: (res) => {},
      fail: (res) => {},
      success: (result) => {},
    })
  },

  onLoad: function (options) {
    console.log("onLoad");
    var content_data={
      imgSrc:[
        "/image/2.png",
        "/image/4.png"
      ],
      title_data:{
        title_cat:"人生若只如初见",
        title_crb:"何事秋风悲画扇"
      }  
    }

    // this.setData(content_data);
    // this.setData({
    //   postsKey:posts_content
    // })
    this.setData(postData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
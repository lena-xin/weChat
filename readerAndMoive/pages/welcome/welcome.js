// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onTextTap:function(){
    console.log("onTextTap");
  },

  onTap:function(){
    console.log("ontap");
    /* 跳转之后可以返回到上一次页面 */
    
    wx.navigateTo({
      url: '/pages/posts/post',
      complete: (res) => {},
      fail: (res) => {},
      success: (result) => {},
    })
    
    /* 页面跳转后不能返回到上一次页面*/
    // wx.redirectTo({
    //   url: '/pages/posts/post',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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
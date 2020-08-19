// pages/fenxiang/fenxiang.js
var amap = require('../../utils/qqmap-wx-jssdk');
var key = '6WOBZ-TNBWQ-2LS52-GD3A2-267WZ-R7BZY';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      longitude:options.longitude,
      latitude:options.latitude
    });
    var myAmp = new amap({key:key});

    myAmp.reverseGeocoder({
      location:options.latitude+','+options.longitude,
      success:function(res){
        console.log(res);
      }
    })
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
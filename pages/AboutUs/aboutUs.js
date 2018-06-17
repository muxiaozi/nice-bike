//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        id: '1',     //帮助id
        title: '为什么加入公益单车?'
      },
      {
        id: '2',     //帮助id
        title: '如何使用公益单车小程序?'
      },
      {
        id: '3',     //帮助id
        title: '如何获得公益单车的勋章奖励?'
      },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function (event) {
    console.log('--event--', event)
    wx.navigateTo({
      url: '../AboutUs/detail',
    })
      wx.request({
      url: "http://wxcms.com/getOne",
      //这里是 
      id:event.currentTarget.dataset.id,
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      fail: function (msg) {

      },
      success: function (msg) {
        that.setData({
          info: msg.data,
        })
      },
      complete: function () {

      }
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: "http://wxcms.com/getOne",
      //这里是 
      data: {
         
      },
      method:"GET",
      header: {
        'content-type': 'application/json'
      },
      fail:function(msg){

      },
      success: function (msg) {
        that.setData({
          info: msg.data,
        })
      },
      complete:function(){

      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

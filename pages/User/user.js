//获取应用实例
const app = getApp()

Page({
  data: {
    wx_id: '12345678',          //微信OpenId
    avatar_url: '',     //头像
    name: 'weiyastory',           //昵称
    badge: 290,          //勋章
    integral: 10       //积分 
  },
  //事件处理函数
  goRecord: function (event) { 
    console.log('--goRecord--event.current.dataset.userId--', event.currentTarget.dataset.userid)
    wx.navigateTo({
      url: '../Record/record?id=' + event.currentTarget.dataset.userid + '&index=' + event.currentTarget.dataset.index,
    })
  },
   
  onLoad: function () {
    var that = this;
    wx.request({
      url: "http://wxcms.com/getOne",
      //这里是 
      data: { 
      },
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

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

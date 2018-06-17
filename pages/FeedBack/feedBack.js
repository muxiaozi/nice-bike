//获取应用实例
const app = getApp()

Page({
  data: {
    name:"",
    tel:"",
    content:"",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  getFormData: function (event){
    console.log('==detail---',event.detail)
    this.setData({
      name: event.detail.value.name,
      tel:event.detail.value.tel,
      content: event.detail.value.content
    });
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

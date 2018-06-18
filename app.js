//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //onShow 当小程序启动，或从后台进入前台展示，触发
  //前台 后台： 点击左上角关闭小程序 或者 按Home键退出微信时，此时小程序不是真正的销毁，
  //而是进入后台模式运行，当再次打开，是进入前台运行而不是重新启动
  onShow:function(){

  },
  //onHide 当小程序从前台进入后台 触发
  onHide: function () {

  },
  //onError 当小程序发生脚本错误，或者API调用失败时，触发 饼带上错误信息
  onError: function () {

  },
  //用来存放一些全局变量，比如说统一的远程接口地址。这些全局变量在pages中可以获取到
  globalData: {
    userInfo: null,
    remoteUrl:"",//远程接口
    shareTicket:false
  }
})
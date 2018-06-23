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
        console.log('===wx.login==',res)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxc55405d40b934b51' + '&secret=0d8635d5e70e385c3dbff51f0ce557ca' + '&js_code=' + res.code +'&grant_type=authorization_code',
          method: "GET",
          header: {
            'content-type': 'application/json'
          },
          fail: function (msg) {
            console.log('==fail===msg', msg)
          },
          success: function (msg) {
            console.log('==success===msg', msg)

          },
          complete: function () {
            console.log('==complete===msg', )
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('===wx.getSetting==', res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('===wx.getUserInfo==', res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              
              wx.request({
                url: this.globalData.remoteUrl,
                //这里是 
                data: {
                  name: res.userInfo.nickName,
                  avatar_url: res.userInfo.avatarUrl,
                  wx_id:'sdfsf'
                },
                method: "POST",
                header: {
                  'content-type': 'application/json'
                },
                fail: function (msg) {
                  console.log('==fail===msg', msg)
                },
                success: function (msg) {
                  console.log('==success===msg', msg)
                  
                },
                complete: function () {
                  console.log('==complete===msg', )
                }
              })

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
  commonFail:function(msg){
    wx.showToast({
      title: msg,
    });
  },
  //用来存放一些全局变量，比如说统一的远程接口地址。这些全局变量在pages中可以获取到
  globalData: {
    userInfo: null,
    remoteUrl:"https://api.muxiaozi.cn/bike/users/",//远程接口
    shareTicket:false
  }
})
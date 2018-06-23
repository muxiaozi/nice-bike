const app = getApp()

Page({
  data:{
    place:"",
    reason:0,
    text:"",
    imgs:[],
    reasons: ['私自上锁', '乱停乱放', '被扔河道', '远离市区', '其他问题'],
  },
  onLoad: function (options){
    var that = this;
    console.log('app--',app, this)
    // wx.request({
    //   url: app.globalData.remoteUrl +':1/position/longitude/latitude',
    //   method:"GET",
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   fail: app.commonFail,
    //   success: function (msg) {
    //     console.log('==success===msg', msg)

    //   }
    // })
    that.setData({
      place: options.place,
    })
  },
  showReason:function(e){
    var that = this;
    wx.showActionSheet({
      itemList: this.data.reasons,
      itemColor:'#333',
      success: function (res) {
        that.setData({
          reason: res.tapIndex,
        })
      }
    })
  },
  saveText:function(e){
    this.setData({ text: e.detail.value});
  },
  uploadImg: function (event) {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths,
          imgs = that.data.imgs;
        imgs = imgs.concat(tempFilePaths);
        that.setData({
          imgs: imgs
        })
      }
    })
  },
  submitQ:function(e){
    console.log('==submitQ==e==data==', e, this.data)
  }
})
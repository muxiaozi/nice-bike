Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        tit:'帮助之前',
        img:[]
      },
      {
        tit: '帮助之后',
        img: []
      },
    ]
  },
  saveHelp:function(event){
    console.log('==saveHelp==')
    
  },
  cancelHelp:function(event){
    console.log("--cancelHelp--")
    wx.navigateBack();
  },
  uploadImg:function(event){
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilePaths = res.tempFilePaths,
            idx = event.currentTarget.dataset.idx,
            list = that.data.list,
            imgs = list[idx].img;
        list[idx].img = imgs.concat(tempFilePaths);
        that.setData({
          list: list
        })
      }
    })
  }
})
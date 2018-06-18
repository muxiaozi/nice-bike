
Page({
  data: {
    text:"恭喜您获得1积分！"
  },
  goBack:function(e){
    wx.navigateBack({ delta: 2 }); 
  },
  goInt:function(e){
    wx.navigateTo({
      url: "../RecordList/record?index=1"+ "&userId=" + e.currentTarget.dataset.userid,
    })
  }
  
})
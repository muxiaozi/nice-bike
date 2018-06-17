const app = getApp()

Page({
  data:{
    place:"",
  },
  onLoad: function (options){
    var that = this;
    that.setData({
      place: options.place,
    })
  }
})
// pages/Help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      [
        {
          tit: "乱停乱放",
          engTit: "Disorderly parking place",
          img: '../../static/help_icon/1.jpg',
          cls:"ui-help-item-view-1"
        },
        {
          tit: "二维码损坏",
          engTit: "Two-dimensional code damage",
          img: '../../static/help_icon/2.jpg',
          cls: "ui-help-item-view"
        },
      ],
      [
        {
          tit: "车子损坏",
          engTit: "Bicycle damage",
          img: '../../static/help_icon/3.jpg',
          cls: "ui-help-item-view-1"
        },
        {
          tit: "骑回市中心",
          engTit: "Go back to the center of the city",
          img: '../../static/help_icon/4.jpg',
          cls: "ui-help-item-view"
        },
      ],
      [
        {
          tit: "解救小车",
          engTit: "Rescue bicycle",
          img: '../../static/help_icon/5.jpg',
          cls: "ui-help-item-view-1"
        },
        {
          tit: "其他问题",
          engTit: "Other questions",
          img: '../../static/help_icon/6.jpg',
          cls: "ui-help-item-view"
        },
      ]     
    ]
  },
  goPage:function(event){
    wx.navigateTo({
      url: "../Help/detail",
    })
  }
})
var amapFile = require('../../libs/amap-wx.js'); 
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },
  doRecord:function(e){
    wx.navigateTo({
      url: "../DoRecord/doRecord?place=" + this.data.textData.desc,
    })
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
    that.changeMarkerColor(markersData, id);
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '3511d4db187cf871453767e4aea419c9' });
    myAmapFun.getPoiAround({
      iconPathSelected: '../../static/map_icon/marker_active.png',  
      iconPath: '../../static/map_icon/marker_normal.png',  
      success: function (data) {
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData, 0);
      },
      fail: function (info) {
        wx.showModal({ title: info.errMsg })
      }
    })
  },
  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        data[j].iconPath = '../../static/map_icon/marker_active.png'; 
      } else {
        data[j].iconPath = '../../static/map_icon/marker_normal.png';  
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

})
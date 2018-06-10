//获取应用实例
const app = getApp()

Page({
  data: {
    id: 'r123',     //该条维护记录的ID
    images: ['http://2t.5068.com/uploads/allimg/151105/48-1511051J945-50.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528650881775&di=95f96c8365071389c0ed6b652f0691ac&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2Fshaitu%2F20120728%2F2306%2F5013ffe37f0f3.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528650881773&di=aa3986d338b1248a4707b3f4873f5947&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201503%2F13%2F20150313193850_PJwAY.thumb.700_0.jpeg','http://2t.5068.com/uploads/allimg/151027/57-15102G45306-51.jpg'
    ], //首图 上传图片的第一张
    remark: '这是我提交的第一条', //备注
    time: '2018-04-10',     //时间
    place: '北京三里屯',  //地点
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  }, 
  onLoad: function (options) {
    var that = this; 
     //根据option的id去请求

  },
   changeIndex:function(){
     console.log('==changeIndex--', this.data)
     this.setData({
       index: !this.data.index,
       btn1Class: !!this.data.index ? "btn-check" : "btn-normal",
       btn2Class: !this.data.index ? "btn-check" : "btn-normal",
     })
   },
   changeIndicatorDots: function (e) {
     this.setData({
       indicatorDots: !this.data.indicatorDots
     })
   },
   changeAutoplay: function (e) {
     this.setData({
       autoplay: !this.data.autoplay
     })
   },
   intervalChange: function (e) {
     this.setData({
       interval: e.detail.value
     })
   },
   durationChange: function (e) {
     this.setData({
       duration: e.detail.value
     })
   }
})
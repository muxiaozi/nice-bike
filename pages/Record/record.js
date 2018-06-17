//获取应用实例
const app = getApp()

Page({
  data: {
    index:0,//查看的是提交记录还是 积分记录
    btn1Class:'btn-normal',
    btn2Class: 'btn-check',
    maintain: [             //维护列表
      {
        id: 'r123',     //该条维护记录的ID
        images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528629326000&di=a0e9a85c96bb44b4bb54300d36378e95&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F13%2F01%2F20%2F66258PICYfn.jpg', //首图 上传图片的第一张
        remark: '这是我提交的第一条', //备注
        time: '2018-04-10',     //时间
        place: '北京三里屯',  //地点
      },
      {
        id: 'r123',     //该条维护记录的ID
        images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528650860231&di=71066a9c64a96e7f33c98a5f63101f26&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201412%2F17%2F20141217150801_nGJ3u.png', //首图 上传图片的第一张
        remark: '这是我提交的第二条', //备注
        time: '2018-04-23',     //时间
        place: '上海陆家嘴',  //地点
      }
    ],
    integral: [             //积分列表
      {
        id: 'i123',     //该条积分记录的ID
        images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528650860217&di=689a371c68ffbf67d409eb00fd2dee6d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201409%2F01%2F20140901140915_2T5xT.png', //图片
        grade: 2,  //分数
        time: '2018-05-9',     //时间
        remark: '这是我第一条积分'  //具体内容
      },
      {
        id: 'i123',     //该条积分记录的ID
        images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528650881778&di=6f56415015072f3473a56e42a7768237&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201502%2F01%2F20150201190536_ruyLX.thumb.700_0.jpeg', //图片
        grade: 20,  //分数
        time: '2018-06-10',     //时间
        remark: '这是我第2条积分'  //具体内容
      }
    ]
  }, 
  onLoad: function (options) {
    var that = this;
    var index = parseInt(options.index);
      console.log('onLoad==record--options--', options, !options.index ? "btn-check" : "btn-normal"
        , !!options.index ? "btn-check" : "btn-normal", index)
    this.setData({
      index: index,
      btn1Class: !index ?"btn-check":"btn-normal",
      btn2Class: !!index ? "btn-check" : "btn-normal",
    })


  },
   changeIndex:function(){
     console.log('==changeIndex--', this.data)
     this.setData({
       index: !this.data.index,
       btn1Class: !!this.data.index ? "btn-check" : "btn-normal",
       btn2Class: !this.data.index ? "btn-check" : "btn-normal",
     })
   },
   goRecordDetail:function(event){
     console.log('==goRecordDetail==event.currentTarget.dataset.id', event.currentTarget.dataset.id,)
     wx.navigateTo({
       url: '../Record/recordDetail?id=' + event.currentTarget.dataset.id,
     })
   },
   goAccumulateDetail: function (event) {
     console.log('==goAccumulateDetail==event.currentTarget.dataset.id', event.currentTarget.dataset.id)
      
   },
})
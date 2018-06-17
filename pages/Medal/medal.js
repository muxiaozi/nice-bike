//获取应用实例
const app = getApp()

Page({
  data: {
    hiddenmodal:true,
    whichGrade:1,
    list:[
      {
        img: '../../static/medal_icon/1.png',
        content:"乐于助车",
        grade:">99"
      },
      {
        img: '../../static/medal_icon/2.png',
        content: "星星之火",
        grade: "50-99分"
      },
      {
        img: '../../static/medal_icon/3.png',
        content: "渐入佳境",
        grade: "25-49分"
      },
      {
        img: '../../static/medal_icon/4.png',
        content: "持之以恒",
        grade: "15-24分"
      },
      {
        img: '../../static/medal_icon/5.png',
        content: "登峰造极",
        grade: "5-14分"
      },
      {
        img: '../../static/medal_icon/6.png',
        content: "文明模范",
        grade: "1-4分"
      },
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
  showMedalPop:function(){
    console.log('==showMedalPop--', this.data)
    this.setData({
      hiddenmodal: !this.data.hiddenmodal
    }) 
   },
   backMedal: function(){
     console.log('===backMedal--getCurrentPages-', getCurrentPages())
     wx.navigateBack({ delta: 1}); 
   }
})
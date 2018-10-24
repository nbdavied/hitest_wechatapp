// pages/do-single-ques/do-single-ques.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question:new Object(),
    nextType:'queue'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bankid:options.bankid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    this.questionService.nextQuestion(this.data.bankid).then(data=>{
      that.setData({
        question: data
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  questionService: require('../../services/questionService.js'),

  onSelectChange: function(e){
    console.log(e.detail);
  },
  nextQuestion: function(e){
    this.setData({
      nextType:e.detail.value
    })
  }
})
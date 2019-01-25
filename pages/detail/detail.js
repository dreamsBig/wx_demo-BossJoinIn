import req from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:'',
    jobpage:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let query = options.query;
    this.setData({
      query
    })
    req.request.get('https://www.easy-mock.com/mock/5909e0457a878d73716eb24a/Boss/detail').then((res)=>{
      let resultArr = res.data.data
      let jobArr = []
      resultArr.forEach((value,index) => {
        if(value.companyName === this.data.query){
          jobArr.push(resultArr[index]);
          this.setData({
            jobpage:jobArr[0]
          })
        }
      });
      console.log(this.data.jobpage)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this)
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

  }
})
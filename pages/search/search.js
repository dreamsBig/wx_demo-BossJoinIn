import req from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    joblist:[],
    type:'',
    searchValue:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.joblist = []
    // 界面加载好进来的页面
    // options是其他页面传递过来的参数
    let type = options.type || ""
    let searchValue = options.searchValue || ""
    this.setData({
      searchValue,
      type
    })
    this.init()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  itemPageTo: function(e){
    let font = e.currentTarget.dataset.query
    console.log(e)
    wx.navigateTo({
      url:"../detail/detail?query="+font.company
    })
  },
  init: function(){
    req.request.get('https://www.easy-mock.com/mock/5909e0457a878d73716eb24a/Boss/jobList').then((res)=>{
      let resultArr = res.data.data
      let searchArr = []
      resultArr.forEach((value,index)=>{
        if(value.city===this.data.searchValue){
          searchArr.push(resultArr[index]);
          this.setData({
            joblist:searchArr
          })
        }else if(value.title===this.data.searchValue){
          searchArr.push(resultArr[index]);
          this.setData({
            joblist:searchArr
          })
        }else if(value.company === this.data.searchValue){
          searchArr.push(resultArr[index]);
          this.setData({
            joblist:searchArr
          })
        } else if(value.title === this.data.type){
          searchArr.push(resultArr[index]);
          this.setData({
            joblist:searchArr
          })
        } else if(this.data.searchValue === 'undefined' && this.data.type === ''){
          this.setData({
            joblist:res.data.data
          })
        }
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

  }
})
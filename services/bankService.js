var API_HOST = getApp().globalData.API_HOST;

function getBankList(){
  return new Promise((resolve, reject) =>{
    wx.request({
      url: API_HOST + "/banks",
      method: 'GET',
      complete:(res) => {
        if(res.statusCode == 200){
          resolve(res.data);
        }else{
          reject(res);
        }
      }
    })
  })
}

module.exports={
  getBankList
}
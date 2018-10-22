var API_HOST = getApp().globalData.API_HOST;
function nextQuestion(bankid, last = 0, type = null, onlyWrong = false ){
  let wrong = onlyWrong? '1': '0';
  let url = `/question/next?bankId=${bankid}&last=${last}&wrong=${wrong}`;
  if (type) {
    url = url + `&type=${type}`;
  }
  return new Promise((resolve, reject) =>{
    wx.request({
      url: API_HOST + url,
      method:'GET',
      complete: (res) => {
        if(res.statusCode == 200){
          resolve(res.data);
        }else{
          reject(res);
        }
      }
    })
  });
}

module.exports = {
  nextQuestion
}
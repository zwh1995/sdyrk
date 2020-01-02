const datalist = require('./public/mock/index.js')
module.exports = {
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/list',(req,res)=>{
        res.json({
          list:datalist,
          errcode:0
        })
      })
    }
  }
}
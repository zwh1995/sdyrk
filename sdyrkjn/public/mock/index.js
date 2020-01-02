const Mock = require('mockjs')

const datalist = []

for(let i = 0; i<6; i++){
  datalist.push({
    img:Mock.Random.image('100X100' , Mock.Random.color()),
    title:Mock.Random.ctitle()
  })
}

console.log(datalist)
module.exports = datalist
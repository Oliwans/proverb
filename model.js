/* 扫描所有的model模型 */
const fs = require('fs')
console.log(__dirname)
const files = fs.readdirSync(__dirname + '/model') // 遍历目录
console.log(files)
const jsFiles = files.filter(item => {
  return item.endsWith('.js')
}, files)

module.exports = {}
for (const file of jsFiles) {
  console.log(`import model from file ${file}`)
  const name = file.substring(0, file.length - 3)
  module.exports[name] = require(__dirname + '/model/' + file)
}
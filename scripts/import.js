const jsonData = require('../idiom')
require('../sequelize')
const model = require('../model.js');
let idiom = model.idiom;
// console.log(model)

// (async () => {
//     let data = await idiom.findAll();
//     console.log(data, 111)
// })();
function aa(num) {
    idiom.create({
        derivation: jsonData[num].derivation,
        example: jsonData[num].example,
        explanation: jsonData[num].explanation,
        pinyin: jsonData[num].pinyin,
        word: jsonData[num].word,
        abbreviation: jsonData[num].abbreviation
    }).then(() => {
        if (jsonData[num + 1]) {
            aa(num + 1)
        }
    })
}

aa(0)
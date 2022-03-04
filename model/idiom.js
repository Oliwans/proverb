const {Sequelize} = require('sequelize')
const sequelize = require('../sequelize')
const idiom = sequelize.define('idiom', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
      comment: 'ID', // 字段描述（自1.7+后，此描述不再添加到数据库中
      autoIncrement: true, // 是否自增
      primaryKey: true, // 指定是否是主键
      unique: true, // 设置为true时，会为列添加唯一约束
    },
    derivation: {
      type: Sequelize.STRING,
      validate: {}, // 模型每次保存时调用的验证对象。可是validator.js中的验证函数(参见 DAOValidator)、或自定义的验证函数
      allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
      comment: '来历' // 字段描述（自1.7+后，此描述不再添加到数据库中）
    },
    example: {
      type: Sequelize.STRING,
      validate: {}, // 模型每次保存时调用的验证对象。可是validator.js中的验证函数(参见 DAOValidator)、或自定义的验证函数
      allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
      comment: '示例' // 字段描述（自1.7+后，此描述不再添加到数据库中）
    },
    explanation: {
        type: Sequelize.STRING,
        validate: {}, // 模型每次保存时调用的验证对象。可是validator.js中的验证函数(参见 DAOValidator)、或自定义的验证函数
        allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
        comment: '示例' // 字段描述（自1.7+后，此描述不再添加到数据库中）
    },
    pinyin: {
        type: Sequelize.STRING,
        validate: {}, // 模型每次保存时调用的验证对象。可是validator.js中的验证函数(参见 DAOValidator)、或自定义的验证函数
        allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
        comment: '示例' // 字段描述（自1.7+后，此描述不再添加到数据库中）
    },
    word: {
        type: Sequelize.STRING,
        validate: {}, // 模型每次保存时调用的验证对象。可是validator.js中的验证函数(参见 DAOValidator)、或自定义的验证函数
        allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
        comment: '示例' // 字段描述（自1.7+后，此描述不再添加到数据库中）
    },
    abbreviation: {
        type: Sequelize.STRING,
        validate: {}, // 模型每次保存时调用的验证对象。可是validator.js中的验证函数(参见 DAOValidator)、或自定义的验证函数
        allowNull: false, // 设置为false时，会给添加NOT NULL（非空）约束，数据保存时会进行非空验证
        comment: '示例' // 字段描述（自1.7+后，此描述不再添加到数据库中）
    }
  }, {
    freezeTableName: true, // 设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
    timestamps: false,
    autoIncrement: true
  })

  idiom.sync({
    force: false,
  })
  
  module.exports = idiom
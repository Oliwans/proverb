const db = require('./config')
const { Sequelize } = require('sequelize');
var sequelize = new Sequelize(db.database, db.user, db.password, {
    port: db.port,
    host: db.host,
    dialect: 'postgres',
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
    pool: {
        max: 20,
        min: 1,
        acquire: 60000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize
const Koa = require('koa');
const { Sequelize } = require('sequelize');
const db = require('./config')

var sequelize = new Sequelize(db.database, db.user, db.password, {
    port:db.port,
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
const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    let start = new Date().getTime()
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.response.set('X-Response-Time', `${ms}ms`);
});


// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
const Koa = require('koa');
const Redis = require('ioredis');
const redis = new Redis({
    port: 6379, // Redis port
    host: "127.0.0.1", // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    // password: "auth",
    db: 0,
})
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

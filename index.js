const BodyParser = require('koa-bodyparser');
const Multer = require('koa-multer');
const Serve = require('koa-static');
const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');

const router = require('./src/route/router');
const exception = require('./src/middleware/exception');
const auth = require('./src/middleware/auth');
const mongodb = require('./src/model/db');

const app = new Koa();

//静态文件管理
app.use(Serve(path.join(__dirname, '/static')));

//解析请求体
app.use(BodyParser());

//拦截错误
app.use(exception);

//授权管理
app.use(auth);

//路由解析
app.use(router.routes())
    .use(router.allowedMethods());

//服务器错误处理
app.on('error', (err) => {
    console.error('服务器发生错误', err);
})

app.listen(8989);

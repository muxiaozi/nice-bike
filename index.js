/**
 * File: index.js
 * Author: muxiaozi <1002042998@qq.com>
 * Date: 2018-06-05
 */
const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
    ctx.body = 'Nice bike';
})

app.listen(8989);
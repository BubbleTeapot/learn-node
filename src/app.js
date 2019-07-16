'use strict';

const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const controller = require('./koa-router/router');

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(bodyparser());
app.use(controller());

app.listen(3000);
console.log("http://127.0.0.1:3000/");
'use strict';

const Koa = require('koa');
const app = new Koa();

app.use( async (ctx, err) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello koa</h1>'

});

app.listen(300);
console.log('http://127.0.0.1:3000');
'use strict';

const Koa = require('koa');
const app = new Koa();

app.use( async (ctx, next) => {
    console.log(` ${ctx.request.method} ${ctx.request.url} `);  //打印方法和URL
    await next();   // 调用下一个middleware
});

app.use( async (ctx, next) => {
    const start = new Date().getTime(); //获取当前时间
    await next();    // 调用下一个middleware
    const ms = new Date().getTime() - start; //耗费时间
    console.log(`Time: ${ms}ms`);   //打印时间
});

app.use( async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello koa!</h1>';
    console.log("show")
});

app.listen(3000);
console.log('http://127.0.0.1:3000');
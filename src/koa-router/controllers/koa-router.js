'use strict';

var fn_idnex = async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/sigin" method="post">
        <p> Name: <input name="name" type="text" value="koa" /></p>
        <p> Password: <input name="password" type="password"></p>
        <p> <input type="submit" value=Submit></p>
        </form>`;
};
var fn_sigin = async(ctx, next) => {
    var name = ctx.request.body.name || "";
    var password = ctx.request.body.password || "";
    console.log(`singin with name; ${name},password: ${password}`);
    if(name === "koa" && password === "123456") {
        ctx.response.body = `<h1>Welcome,${name} !</h1>`;
    }else {
        ctx.response.body = `<h1>Login Failed!</h1>
        <p> <a href="/">Try again!</a></p>`;
    }
};

module.exports = {
    'GET /': fn_idnex,
    'POST /sigin': fn_sigin
}
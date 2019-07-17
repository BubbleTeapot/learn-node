'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
    nocache = opts.nocache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(path, {
            nocache: nocache,
            watch: watch
    }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
    });
    if(opts.filters) {
        for(var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv("view", {
    watch: true,    // 当模板变化时重新加载。使用前请确保已安装可选依赖 chokidar。
    filters: {
        hex: function(n) {
            return '0x' + n.toString(16);
        }
    }
});

var s = env.render('index.html', {name: `htcs`});
console.log(s)
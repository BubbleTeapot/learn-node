'use strict';

const fs = require('fs');

// var files = fs.readdirSync(__dirname + '/controllers/');

// var js_files = files.filter((f) => {
//     return f.endsWith('.js');
// });

// for (var f of js_files) {
//     console.log(`controller:${f}`);
//     let mapping = require(__dirname + 'controllers' + f);
//     for( var url in mapping) {
//         if(url.startsWith('GET')) {
//             var path = url.substring(4);
//             router.get(path, mapping[url]);
//         }else if(url.startsWith('POST')) {
//             var path = url.substring(5);
//             router.post(path, mapping[url]);
//         }else {
//             console.log(`invalid URL:${url}`);
//         }
//     }
// }

function addMapping(router, mapping) {
    for( var url in mapping) {
        if(url.startsWith('GET')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
        }else if(url.startsWith('POST')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
        }else {
            console.log(`invalid URL:${url}`);
        }
    }
}
function addcontrollers(router, dir) {
    var files = fs.readdirSync(__dirname + '\\' + dir);
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    })
    for(var f of js_files) {
        let mapping = require(__dirname + '\\' + dir + '\\' + f);
        addMapping(router, mapping);
    }
}
// addcontrollers(router);
module.exports = function(dir) {
    let controller_dir = dir || 'controllers';
    const router = require('koa-router')();
    addcontrollers(router, controller_dir);
    return router.routes();
}
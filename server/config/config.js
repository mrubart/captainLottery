var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development : {
        db: 'mongodb://localhost/hockeyfan',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://hockeyfan1:staywell@ds063160.mongolab.com:63160/hockeyfan',
        port: process.env.PORT || 80
    }
}
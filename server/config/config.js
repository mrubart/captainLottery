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
    db: 'mongodb://captAdmin:captViking@ds031631.mongolab.com:31631/captainlottery',
    port: process.env.PORT || 80
  }
}
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
    db: 'mongodb://teamArchMain:hockeyFan1@ds031711.mongolab.com:31711/teamarchitect',
    port: process.env.PORT || 80
  }
}
var connect = require('connect');
var app = connect()
  .use('/', connect.static('../client/partner/'))
  .listen(8081);

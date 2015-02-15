var path = require('path');
var fs = require('fs');
var app = require('koa')();
var koaStatic = require('koa-static');

console.log('Starting server');

// log the request and calc response time
app.use(function *(next) {
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  this.set('X-Response-Time', ms + 'ms');
  console.log('%s %s in %sms', this.method, this.url, ms);
});

// serve static files
app.use(koaStatic(path.join(__dirname, './public')));


// preload the app html
var appHtml = fs.readFileSync(path.join(__dirname, './public/index.html'), 'utf8');

// return the app html for all unknown urls
app.use(function *() {
  this.type = 'text/html; charset=utf-8';
  this.body = appHtml;
});

// start the server
var port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on http://0.0.0.0:' + port);

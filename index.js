'use strict';

var koa = require('koa');
var app = koa();

var dom = new Promise(resolve => resolve('Dom'));

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start
   this.set('X-Response-Time', ms + 'ms');
  console.log('%s %s - %s', this.method, this.url, ms);
});


app.use(function *(){
  var me = yield dom;
  // this.throw(403);
  // this.assert(me, 401, 'User not found. Please login!');
  this.body = `Hello World ${me}`;
});

app.listen(3000);
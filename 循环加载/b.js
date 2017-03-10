/**
 * Created by sunrui on 2017/3/6.
 */
exports.done = false;
var a =require('./a');
console.log('在b.js中,a.done=%j ', a.done);
exports.done = true;
console.log('b.js执行完毕!');

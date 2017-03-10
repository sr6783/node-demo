/**
 * Created by sunrui on 2017/3/6.
 */
exports.done = false;
var b = require('./b');
console.log('在a.js中,b.done=%j ',b.done );
exports.done = true;
console.log('a.js执行完毕');

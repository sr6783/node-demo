/**
 * Created by sunrui on 2017/3/6.
 */
// main.js
var mod = require('./lib');
//加载了lib模块,
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
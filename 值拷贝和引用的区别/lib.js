/**
 * Created by sunrui on 2017/3/6.
 */
// lib.js
var counter = 3;
function incCounter() {
    counter++;
}
module.exports = {
    counter: counter,
    incCounter: incCounter,
};
//模块输出了一个内部数据和修改数据的方法
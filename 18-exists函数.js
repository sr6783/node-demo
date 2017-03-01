/**
 * Created by sunrui on 2017/3/1.
 */
//如何检查一个文件是否存在?exists函数可以帮您
    //exists函数的函调函数,只有一个参数,类型是布尔值,通过它表示文件是否存在
const fs = require('fs');
fs.exists('./aaaaaa.js',function(exists){
    console.log(exists ? '存在':'不存在');
});
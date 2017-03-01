/**
 * Created by sunrui on 2017/3/1.
 */
//文件I/O,写入是必修课之一.fs模块提供writeFile函数,可以异步将数据写入一个文件
//如果文件已经存在会被替换
//fs.writeFile(filename,data,callback)
const fs = require('fs');
fs.writeFile('text.txt','异步写数据到文本中',function(err){
    if(err) throw err;
    console.log('Saved successfully!');
});
console.log('我和写文件谁先执行,我先执行说明是异步');
//写文件时,如果文件存在,则替换文件内容
//如果不存在,就创建一个文件,并写入内容
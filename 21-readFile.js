/**
 * Created by sunrui on 2017/3/2.
 */
//回调函数里的data就是读取的文件内容
const fs = require('fs');
//fs.readFile('20-rename用法2.js',function(err,data){
fs.readFile('20-rename用法2.js','utf8',function(err,data){
    if(err) throw err;
    console.log(data);
});
//<Buffer 2f 2a 2a 0a 20 2a 20 43 72 65 61 74 65 64 20 62 79 20 73 75 6e 72 75 69 20 6f 6e 20 32 30 31 37 2f 33 2f 32 2e 0a 20 2a 2f 0a 2f 2f e7 a7 bb e5 8a a8 ... >
//读文件的时候必须显示地设置编码格式,不然就是二进制的缓存
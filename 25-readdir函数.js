/**
 * Created by sunrui on 2017/3/2.
 */
//如果要读取一个目录下的所有文件怎么办
// 读取的是目录,不是所有的文件内容返回的是目录下所有文件的数组
const fs = require('fs');
fs.readdir('../NodeJS-code',function(err,files){
    console.log(files);
});
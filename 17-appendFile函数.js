/**
 * Created by sunrui on 2017/3/1.
 */
//writeFile的写入文件的机制:存在完全替换,不存在创建
//appendFile提供了追加的机制
const fs = require('fs');
fs.appendFile('text.txt','data to append',function(err){
    if (err) {throw err};
    console.log('写入操作完成,成功写入!');
});
//编码格式默认为'utf8'
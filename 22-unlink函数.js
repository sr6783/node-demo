/**
 * Created by sunrui on 2017/3/2.
 */
//删除文件
const fs = require('fs');
fs.unlink('垃圾文件.txt',function(err){
    if(err) throw err;
    console.log('Successfully deleted');
})
/**
 * Created by sunrui on 2017/3/2.
 */
const fs = require('fs');
fs.rmdir('new_file',function(err){
    if(err) throw err;
    console.log('成功删除目录');
});
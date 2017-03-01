/**
 * Created by sunrui on 2017/3/2.
 */
//除了针对文件的操作,目录的创建
//三个参数 路径 权限 回调
const fs = require('fs');
fs.mkdir('./new_file',0777,function(err){
    if(err) throw err;
});
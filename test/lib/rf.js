/**
 * Created by sunrui on 2017/3/7.
 */
const rf = (path,callback)=>{
    const fs = require('fs');
    fs.access(path,(err)=>{
        if(err) console.log('路径有错误');
        fs.readFile(path,'utf8',(err,data)=>{
            if(err) console.log('读取文件失败!');
            callback(data);
        });
    });
};
module.exports = rf;
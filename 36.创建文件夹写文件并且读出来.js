/**
 * Created by sunrui on 2017/3/8.
 */
//创建文件夹,写文件,读文件
const fs = require('fs');
fs.mkdir('./35-dir',(err)=>{
    if(err) throw err;
    fs.writeFile('./36-dir/a.txt','This is a new content','utf8',(err)=>{
        if(err) throw err;
        fs.readFile('./36-dir/a.txt','utf8',(err,data)=>{
            console.log(data);
        });
    });
});
//二次执行时,Error: EEXIST: file already exists, mkdir './35-dir'

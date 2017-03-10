/**
 * Created by sunrui on 2017/3/7.
 */
const fs = require('fs');
fs.readFile('./sadasda','utf8',(err,data)=>{
    if(err) {
        console.log(`02错误是: ${err}`);
    }
});

//同步读文件
try {
    var fr = fs.readFileSync('./sdadas','utf8');
}catch (err){
    console.log(`01错误是: ${err}`);
};
//01错误是: Error: ENOENT: no such file or directory, open './sdadas'
//02错误是: Error: ENOENT: no such file or directory, open './sadasda'


try{
    fs.readFile('./sadasda','utf8',(err,data)=>{
        if(err) {
            console.log('抛出错误');
        }
    });
}catch (err){
    console.log(`错误是: err`);
}

//01错误是: Error: ENOENT: no such file or directory, open './sdadas'
//02错误是: Error: ENOENT: no such file or directory, open './sadasda'
//抛出错误
//异步代码无法被try{}catch(e){}捕获到错误
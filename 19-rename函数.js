/**
 * Created by sunrui on 2017/3/1.
 */
const fs = require('fs');
fs.rename('text.txt','new-text.txt',function(err){
    if(err) {throw err;}
    console.log('没有抛出错误,说明成功修改');
})
//修改文件名称时,一定要加上拓展名,如果有
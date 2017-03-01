/**
 * Created by sunrui on 2017/3/2.
 */
//移动文件 可是fs没有专门的移动文件的函数,但是可以通过rename来达到移动文件的目的
const fs = require('fs');
fs.rename('./被移动的文件.txt','../移走他.txt',function(err){
    if(err) throw err;
    console.log('未报错的话,说明文件成功被移走...');
});

//使用重命名移动文件的话,必须显示地设置新路径下的文件名,
// 只有../不可以
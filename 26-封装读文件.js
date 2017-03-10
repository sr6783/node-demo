/**
 * Created by sunrui on 2017/3/5.
 */
//回调函数往外扔东西的方式:回调函数
const rf = (path,callback)=>{
    const fs = require('fs');
    fs.access(path,(err)=>{
        if(err) throw err;
        fs.readFile(path,'utf8',(err,data)=>{
            if(err) throw err;
            callback(null,data);
        });
    });
}
console.log(module);
module.exports = rf;
//如何把数据扔出去?回调函数的执行
//回调函数怎么拿到的回执?不是返回值,而是参数,
// 回调函数内部的data来源于回调的参数data
//而回调函数参数data来源于readFile的回调
//readFile执行完毕后,readFile定义的回调函数拿到了data
//这个data又给了callback
//callback(null,data)回调函数调用时的参数data是实参data
//实参通常不能是变量,但是调用时,因为是变量就会去调用的同层作用域查找这个data变量指向的数据
//找不到再去上层找
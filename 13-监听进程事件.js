/**
 * Created by sunrui on 2017/2/27.
 */

//process.on()方法监听进程事件
//exit事件,监听exit事件,exit事件什么时候会被触发?代码结束完毕执行,结束进程前会执行回调,
//所以,可以在退出进程前做写操作,比如清理工作
process.on('exit',function(){
    //进行一些清理工作
    console.log('I am tired');
});
var tick = Date.now();
console.log(tick);

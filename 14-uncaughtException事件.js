/**
 * Created by sunrui on 2017/2/27.
 */
//参数error表示发生的异常 Exception "例外""异常"
process.on('uncaughtException',function(err){
    console.log(err);
});
//故意抛出一个异常
    throw new Error('我故意的');
//uncaughtException如何触发?当进程发生了未捕获的异常时触发,通过监听这个可以让程序优雅退出
/**
 * Created by sunrui on 2017/2/27.
 */
// stdin是进程的输入流,我们可以通过注册事件的方式来获取输入的内容
process.stdin.on('readable',function(){
    var chunk=process.stdin.read();
    if(chunk !== null){
        process.stdout.write('data: ' + chunk);
    }
});
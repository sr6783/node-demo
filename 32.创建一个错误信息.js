/**
 * Created by sunrui on 2017/3/8.
 */
// 自定义一个类型的错误信息需要写什么
// 原型对象指向基类错误,
//定制一条错误消息 错误的名字
/*
myError(message)=>{
    this.name = myError;
    this.message = message;
}
myError.prototype = new Error();
*/
function myError(message){
    this.name = 'myError';
    this.message = message;
}
myError.prototype = new Error();
//箭头函数不可以当作构造函数,也就是说不可以使用new 命令,否则会抛错。为什么?
throw new myError('这是一条自定义错误信息');
//抛出自定义错误的好处:更明确给出了更多的信息
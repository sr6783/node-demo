/**
 * Created by sunrui on 2017/3/7.
 */
//自定义错误
const a = new Error('一个未知的错误');
console.log(a);
a.code = 100;

const fs = require('fs');
//如何捕获自定义的错误
try{
    var fr = fs.readFileSync('sdasda','utf8');
}catch (a){
    console.log(a);
}


//如何修补错误
//try{}中放可能发生错误的语句
//catch{}语句中放修补错误的办法,比如读文件失败,就可以再catch语句中写一段代码创建文件
//finally子句一经使用,无论如何都会执行,即使try中报错或者try中没有错误,但是又return,return和错误都会被忽略掉

//错误的类型
//错误是各种各样的,每种错误都有对应的错误类型,当错误发生的时候,就会抛出相应类型的错误对象

//Error 基类型 主要用于开发人员自定义错误
//EvalError 使用eval时发生异常被抛出的错误:以非直接调用eval形式使用
//new eval()
//TypeError: eval is not a constructor
var foo = 1;
eval = foo;  //node并没有报错,高程说会报 EvalError

//RangeError 数值超出相应范围时触发
//var items = new Array(-20);
//RangeError: Invalid array length


//ReferenceError 在访问不存在的变量的时候
var obj = x;

//SynaxError

//TypeError 在变量中保存着意外的类型时,或者在访问不存在的方法时
// var o = new 10 10这里应该是函数类型,而不是数字
// alert('name' in true); true应该是对象类型不是布尔类型
// Function.prototype.toString.call('name');  //'name'这应该是一个对象类型而不是字符串
//错误的产生都是由于执行特定类型的操作时,变量的类型不符合要求所致
// 最常见的TypeError 就是传递给函数的参数与预期类型不相符

//通过不同的错误类型,我们可以知道什么?
//更好的定位错误的产生,从而可以快速解决错误,对错误作出恰当的处理。
try{
    someFunction();
}catch(error){
    if (error instanceof TypeError){
        //处理类型错误
    }
    else if(err instanceof  ReferenceError){
        //处理引用错误
    }else{

    }

}
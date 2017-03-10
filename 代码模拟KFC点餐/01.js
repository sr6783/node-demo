/**
 * Created by sunrui on 2017/3/7.
 */
//怎么写:
//1.配餐员做什么事情 1配餐 2盯着炸薯条
//2.我做什么 1吃

var  doSometing = (callback)=>{
    setTimeout(function(){
        var food = '炸薯条';
        console.log('薯条扎好了!')
        callback(food);

    },5000);
    console.log('配餐一');
    console.log('配餐一');
    console.log('配餐一');
    console.log('配餐一');
    console.log('配餐一');
    console.log('配餐一');
};

var eat = (food)=>{
    console.log(`正在吃${food}`);
};
//doSometing(eat);
doSometing(function(data){
    console.log(`正在吃${data}`);
});
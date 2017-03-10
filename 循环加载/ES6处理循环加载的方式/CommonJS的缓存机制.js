/**
 * Created by sunrui on 2017/3/6.
 */
let foo = {bar:'my-default'};
//module .exports=foo;
//变式2 看我拿最新的foo值
let getFoo = function(){
    return foo;
};
module.exports={
    foo,
    getFoo
};
//先导出再修改foo的值
foo = null;
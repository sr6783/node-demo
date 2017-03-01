/**
 * Created by sunrui on 2017/3/2.
 */
const fs = require('fs');
fs.rename('hahaha','heiheihei',function(err){
    if(err) throw err;
    console.log('hahaha被重命名')
});
/**
 * Created by sunrui on 2017/3/7.
 */
const rf = require('./lib/rf');
rf('./foo.text',(data)=>{
    console.log(`我读的是${data}`);
});
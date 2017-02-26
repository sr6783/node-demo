/**
 * Created by sunrui on 2017/2/26.
 */
const path = require('path');
process.stdout.write('当前目的是:' + process.cwd() + '\n');
try {
    process.chdir(path.resolve('../'));
    process.stdout.write('新目录是:' + process.cwd()+'\n');
}catch (err){
    console.log('chdir:'+ err);
}

/*
* 当前目的是:/Users/sunrui/Documents/code/NodeJS/NodeJS-code
 新目录是:/Users/sunrui/Documents/code/NodeJS*/
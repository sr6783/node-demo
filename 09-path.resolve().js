/**
 * Created by sunrui on 2017/2/26.
 */
const path = require('path');
process.stdout.write('当前路径是'+ path.resolve() + '\n');
// /Users/sunrui/Documents/code/NodeJS/NodeJS-code%
process.stdout.write('新路径1'+ path.resolve('node') + '\n');
process.stdout.write('新路径2' + path.resolve('node','..','..')+'\n');

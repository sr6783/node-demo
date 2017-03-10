import * as bar from './foo1.js';
console.log( bar );


//说明*导出全部会包括默认导出
//{ default: [Function: foo], a: '123', b: [Function: abc] }
//用变量default接收默认导出

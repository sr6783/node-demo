/**
 * Created by sunrui on 2017/3/5.
 */
var rf = require('./26-封装读文件');
rf('25-readdir函数.js', (err, data)=> {
    console.log(data);
});
/*
 console.log(rf.module);
* Module {
 id: '/Users/sunrui/Documents/code/NodeJS/NodeJS-code/26-封装读文件.js',
 exports: {},
 parent:
 Module {
 id: '.',
 exports: {},
 parent: null,
 filename: '/Users/sunrui/Documents/code/NodeJS/NodeJS-code/27-使用读文件.js',
 loaded: false,
 children: [ [Circular] ],
 paths:
 [ '/Users/sunrui/Documents/code/NodeJS/NodeJS-code/node_modules',
 '/Users/sunrui/Documents/code/NodeJS/node_modules',
 '/Users/sunrui/Documents/code/node_modules',
 '/Users/sunrui/Documents/node_modules',
 '/Users/sunrui/node_modules',
 '/Users/node_modules',
 '/node_modules' ] },
 filename: '/Users/sunrui/Documents/code/NodeJS/NodeJS-code/26-封装读文件.js',
 loaded: false,
 children: [],
 paths:
 [ '/Users/sunrui/Documents/code/NodeJS/NodeJS-code/node_modules',
 '/Users/sunrui/Documents/code/NodeJS/node_modules',
 '/Users/sunrui/Documents/code/node_modules',
 '/Users/sunrui/Documents/node_modules',
 '/Users/sunrui/node_modules',
 '/Users/node_modules',
 '/node_modules' ] }*/
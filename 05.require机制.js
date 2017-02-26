//加载模块
var add = require( './05.add' );
console.log( add( 1, 2 ) );

//模块加载的机制：加载时，先把所有代码运行一遍，遇到可执行的代码，包括但不限于函数调用，实例化对象，console...
//暴露出对外接口，外界用变量缓存

var add2 = require( './05.add' );
console.log( add2( 5, 6 ) );

//两次加载同一个模块，，模块内的代码会执行两遍吗？
// 不会 ，require的机制是去磁盘中读文件，然后把关键性代码缓存起来
// 当二次读取的时候，因为缓存中有，直接读缓存了的module对象
// 所以add模块的console只执行了一遍
//关键性:module.exports

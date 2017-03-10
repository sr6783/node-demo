let {
    stat,
    exists,
    readFile
} = require( 'fs' );
/*
等同于
let_fs=require('fs');
stat=_fs.stat;
exists=_fs.exists;
readFile=_fs.readFile;
上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取3个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
*/

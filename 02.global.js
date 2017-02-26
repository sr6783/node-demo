var a = 'hello';
console.assert( global.a === a, 'NodeJS中的最外层变量不是全局对象的属性!' );
/* throw new assert.AssertionError({
  ^
AssertionError: NodeJS中的最外层变量不是全局对象的属性!
    at Console.assert (console.js:95:23)
    at Object.<anonymous> (/Users/sunrui/Documents/code/NodeJS/NodeJS-code/02.global.js:2:9)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:420:7)
    at startup (bootstrap_node.js:139:9)
  */

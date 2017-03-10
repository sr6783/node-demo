/**
 * Created by sunrui on 2017/3/6.
 a,b展示了模块的循环依赖
 */
import {bar}from './b.js';
console.log( 'a.js' );
console.log( bar );
export let foo = 'foo';
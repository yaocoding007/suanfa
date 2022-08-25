"use strict";

/**
 * Array.slice 语法复习
 * arr.slice(begin, end)
 * begin 可选 开始的index
 * end 可选 结束的index
 */
var arr = [0, 1, 2, 3]; // console.log(arr.slice()); //  [ 0, 1, 2, 3 ]
// console.log(arr.slice(0)); // [ 0, 1, 2, 3 ]
// console.log(arr.slice(1)); // [ 1, 2, 3 ]
// console.log(arr.slice(-1)); // [ 3 ]
// console.log(arr.slice(-2)); // [ 2, 3 ]
// console.log(arr.slice(4)); // []
// console.log(arr.slice(5)); // []
// console.log(arr.slice(-5)); // [ 0, 1, 2, 3 ]

console.log(arr.slice(0, 4)); //  [ 0, 1, 2, 3 ]

console.log(arr.slice(-2, -1)); // [ 0, 1, 2, 3 ]
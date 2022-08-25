
/**
 * Array.slice 语法复习
 * arr.slice(begin, end)
 * begin 可选 开始的index
 * end 可选 结束的index
 */

const arr = [0, 1, 2, 3]

// console.log(arr.slice()); //  [ 0, 1, 2, 3 ]
// console.log(arr.slice(0)); // [ 0, 1, 2, 3 ]
// console.log(arr.slice(1)); // [ 1, 2, 3 ]
// console.log(arr.slice(-1)); // [ 3 ]
// console.log(arr.slice(-2)); // [ 2, 3 ]
// console.log(arr.slice(4)); // []
// console.log(arr.slice(5)); // []
// console.log(arr.slice(-5)); // [ 0, 1, 2, 3 ]


// console.log(arr.slice(0, 4)); //  [ 0, 1, 2, 3 ]


console.log(arr.slice(0, 1)); //  [ 0, 1, 2, 3 ]
console.log(arr.slice(-2, -1)); // [ 2 ] 倒数第二个到倒数第一个 不包括倒数第一个
console.log(arr.slice(-3, -1)); // [ 2 ] 倒数第二个到倒数第一个 不包括倒数第一个

// 当begin 跟 end 同时存在的时候 是不包括 end 的
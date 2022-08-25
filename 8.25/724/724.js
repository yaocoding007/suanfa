// https://leetcode.cn/problems/find-pivot-index/
const nums = [1, 7, 3, 6, 5, 6]



function pivotIndex(nums) {
    const total = nums.reduce((acc, curr) => acc+curr, 0)
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        if(2*sum + nums[i] === total) {
            return i
        }   
        sum += nums[i]
    }

    return -1
}


// function getSum(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0)
// }
// function getSumInArr(arr, index, type) {
//     const sunArr = type === 'left' 
//         ? arr.slice(0, index)
//         : arr.slice(index+1)
//     return getSum(sunArr)
// }
// function pivotIndex(nums) {
//     let index = -1;
//     for(let i = 0; i < nums.length; i++) {
//         if(getSumInArr(nums, i, 'left') === getSumInArr(nums, i, 'right')) {
//             index = i;
//             break;
//         }
//     }
//     return index
// };

console.log('lly-log --  --->', pivotIndex(nums));
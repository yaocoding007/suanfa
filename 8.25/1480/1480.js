/**
* ===============================================================
* https://leetcode.cn/problems/running-sum-of-1d-array/
*/

function runningSum(nums) {
    return nums.reduce((acc, curr, index) => {
        const lastValue = acc[index-1] || 0
        return [
            ...acc,
            curr+lastValue
        ]
    }, [])
};

const foo = [1,2,3,4]

// console.log(runningSum(foo))

/**
 *  reduce 语法
 * arr.reduce((acc, curr, index, origin) => {}, [])
 * 
 * deps 有值的话会带到acc里 并不会 影响循环次数
 * 换句话说 就是 第一次循环的 acc 会是 deps 
 * 
 * 
 */

const res = [1, 2, 3].reduce((acc, curr, index, origin) => {
    // console.log('reduce --  --->', acc, curr, index, origin);
    return [
        ...acc, curr+acc
    ]
}, [])

/**
 * reduce --  ---> [] 1 0 [ 1, 2, 3 ]
 * reduce --  ---> [ '1' ] 2 1 [ 1, 2, 3 ]
 * reduce --  ---> [ '1', '21' ] 3 2 [ 1, 2, 3 ]
 */


const res2 = [1, 2, 3].reduce((acc, curr, index, origin) => {
    console.log('reduce --  --->', acc, curr, index, origin);
    return [
        ...acc, curr+acc
    ]
}, [1])

/**
 * [ 1 ] 1 0 [ 1, 2, 3 ]
 * [ 1, '11' ] 2 1 [ 1, 2, 3 ]
 * [ 1, '11', '21,11' ] 3 2 [ 1, 2, 3 ]
 */
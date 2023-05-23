/*
1. Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a non-space character only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.*/
// const str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry   "
// const lastCharLen = (str) => {
//     let len = 0;
//     let temp = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             temp = temp+str[i];
//             len = temp.length;
//             if(i==str.length-1){
//                 return len
//             }
//         } else{
//             temp="";
//             len=0;
//         }   
//     }

// }
// let res = lastCharLen(str);
// console.log(res)

/*
Example 2:
Input: s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry   "
Output: 8
Explanation: The last word is "industry" with length 8.


2. Given an integer array nums, remove the duplicates and return unique array

Example:
Input: nums = [1,2,2,3]
Output: [1, 2, 3]*/

// const nums = [1,2,2,3,9,9,9,0,0]
// const uniqueNums = (nums) => {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], 1)
//         }
//     }
//     return [...map.keys()]
// }
// let res1 = uniqueNums(nums);
// console.log(res1)

/*




// 3. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Example:
// Input: nums = [2,2,1]
// Output: 1
// */
// const nums = [1,2,2]
// const nonTwiceNums = (nums) => {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], 1)
//         }else{
//             map.set(nums[i],map.get(nums[i])+1)
//         }
//     }

//     for(let [k,v] of map){
//         if(v==1)return k
//     }
//     return -1
// }
// let res1 = nonTwiceNums(nums);
// console.log(res1)






/*

4. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
// */
// const nums = [0, 1, 0, 3, 12];
// const moveAll0s = (nums) => {
//    let i=0;
//    let j=nums.length-1;
//    while(i<j){
//     if(nums[i]==0&&nums[j]!==0){
//        let temp=nums[i]
//         nums[i]=nums[j]
//         nums[j]=temp;
//         i++;
//         j--;
//     }else if(nums[i]!==0){
//         i++;
//     }else if(nums[j]==0){
//         j--
//     }
//    }
//    return nums
// }
// let res = moveAll0s(nums);
// console.log(res)



/*







5. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "instrive"
Output: 1

Example 2:
Input: s = "aabb"
Output: -1


*/
const str = "nareshhhnar";
const firstNonRep = (str) => {
    for (let i = 0; i < str.length; i++) {
        let j = i + 1;
        let count=0;
        while (j < str.length) {
            if (str[i] !== str[j]) {
                count++;//6
                j++;
            }else{
                break;
            }
        }
        if(count===str.length-i-1)return i
    }
    return -1
}
let res1 = firstNonRep(str);
console.log(res1)

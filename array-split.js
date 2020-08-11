const nums = [11, 12, 13, 14, 15, 16, 17, 18];
const part = nums.slice(2, 4);
const remove = nums.splice(2, 4, 77)

console.log(part)
console.log(remove);
console.log(nums)

const together = nums.join("ami ")
console.log(together);
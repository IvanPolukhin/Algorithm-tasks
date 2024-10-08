const nums = [1, 2, 3, 4];
const fn = (accum, curr) => accum + curr;
const init = 0;

const reduce = function (nums, fn, init) {
  val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

console.log(reduce(nums, fn, init));

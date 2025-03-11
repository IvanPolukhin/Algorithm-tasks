function ArrayWrapper(nums) {
    this.nums = nums;
}

ArrayWrapper.prototype.valueOf = function () {
    return this.nums.flat().reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.flat().join(",")}]`;
};

const AW = new ArrayWrapper([
    [1, 2],
    [3, 4],
]);

console.log(AW);
console.log(AW.valueOf());
console.log(AW.toString());

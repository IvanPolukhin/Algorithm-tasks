const triangleType = (nums) => {
    const [a, b, c] = nums;

    if (a + b <= c || a + c <= b || b + c <= a) return "none";
    if (a === b && b === c) return "equilateral";
    if (a === b || a === c || b === c) return "isosceles";
    return "scalene";
};

console.log(triangleType([3, 3, 3])); // "equilateral"
console.log(triangleType([3, 3, 4])); // "isosceles"
console.log(triangleType([3, 4, 5])); // "scalene"
console.log(triangleType([1, 2, 3])); // "none"

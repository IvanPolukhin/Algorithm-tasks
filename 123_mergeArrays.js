const mergeArrays = (nums1, nums2) => {
    const merged = new Map();

    nums1.forEach(([id, val]) => {
        merged.set(id, (merged.get(id) || 0) + val);
    });

    nums2.forEach(([id, val]) => {
        merged.set(id, (merged.get(id) || 0) + val);
    });

    return Array.from(merged).sort((a, b) => a[0] - b[0]);
};

const nums1 = [
    [1, 2],
    [2, 3],
    [4, 5],
];
const nums2 = [
    [1, 3],
    [3, 4],
    [4, 1],
];

console.log(mergeArrays(nums1, nums2));

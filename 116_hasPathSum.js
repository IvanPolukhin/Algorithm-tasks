class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const hasPathSum = (root, targetSum) => {
    if (!root) return false;

    targetSum -= root.val;

    if (!root.left && root.right) {
        return targetSum === 0;
    }

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

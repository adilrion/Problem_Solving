// Binary Tree Paths
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    
    function dfs(node, currentPath) {
        if (!node) return;
        
        currentPath += node.val;
        
        if (!node.left && !node.right) {
            paths.push(currentPath);
        } else {
            currentPath += '->';  
            dfs(node.left, currentPath);
            dfs(node.right, currentPath);
        }
    }

    dfs(root, '');
    
    return paths;
};


// Example 1
const root1 = new TreeNode(1);
console.log(root1);
root1.left = new TreeNode(2);
console.log(root1);
root1.right = new TreeNode(3);
console.log(root1);
root1.left.right = new TreeNode(5);
console.log(root1);

console.log(binaryTreePaths(root1));  // Output: ["1->2->5", "1->3"]

// Example 2
const root2 = new TreeNode(1);
console.log(binaryTreePaths(root2));  // Output: ["1"]

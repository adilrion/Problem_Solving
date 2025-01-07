var isSameTree = function (p, q) {
    // If both nodes are null, they are the same
    if (!p && !q) return true;

    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let p = [1, 2],
    q = [1, null, 3];

console.log(isSameTree(p, q));

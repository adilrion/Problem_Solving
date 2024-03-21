// problem: 14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
    if (strs[0].length < 0) {
        return 0;
    }
    for (let i = 0; i < strs[0].length; i++) {
        if (!strs.every((word) => word[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

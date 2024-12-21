var isSubsequence = function (s, t) {
    let i = 0; // Pointer for string s
    let j = 0; // Pointer for string t

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // Move s pointer if characters match
        }
        j++; // Always move t pointer
    }

    return i === s.length; // If we matched all characters of s
};

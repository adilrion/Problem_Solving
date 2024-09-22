// 1768. Merge Strings Alternately

function mergeAlternately(word1, word2) {
    let mergedString = "";
    let maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            mergedString += word1[i];
        }
        if (i < word2.length) {
            mergedString += word2[i];
        }
    }
    return mergedString;
}


// Example 1
console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"

// Example 2
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"

// Example 3
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"

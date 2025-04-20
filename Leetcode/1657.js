var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const countFrequency = (word) => {
        const freqMap = new Map();
        for (const char of word) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
      }
      
        return freqMap;
    };

    const freq1 = countFrequency(word1);
  const freq2 = countFrequency(word2);

    // Check if the same set of characters exists in both strings
    if (
        new Set(word1).size !== new Set(word2).size ||
        [...freq1.keys()].sort().join("") !== [...freq2.keys()].sort().join("")
    ) {
        return false;
    }

    // Compare sorted frequency values
    const freqValues1 = [...freq1.values()].sort((a, b) => a - b);
    const freqValues2 = [...freq2.values()].sort((a, b) => a - b);
    return JSON.stringify(freqValues1) === JSON.stringify(freqValues2);
};

// Example Usage:
console.log(closeStrings("abc", "bca")); // true
// console.log(closeStrings("a", "aa")); // false
console.log(closeStrings("cabbba", "abbccc")); // true

// 1456. Maximum Number of Vowels in a Substring of Given Length

var maxVowels = function (s, k) {
    if (s.length === 0 || k === 0) {
        return 0;
    }

    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let maxVowels = 0;
    let currentCount = 0;

    // Count vowels in the first window of size k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentCount++;
        }
    }
    maxVowels = currentCount;

    // Slide the window
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentCount++; // Add new character
        }
        if (vowels.has(s[i - k])) {
            currentCount--; // Remove character that slides out
        }
        maxVowels = Math.max(maxVowels, currentCount);
    }

    return maxVowels;
};


const s = "weallloveyou",
    k = 7;

console.log(maxVowels(s, k));

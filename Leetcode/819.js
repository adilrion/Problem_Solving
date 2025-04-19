function mostFrequentNonBannedWord(paragraph, banned) {
    const words = paragraph.toLowerCase().match(/\w+/g);

    const bannedSet = new Set(banned);
    const wordCounts = {};
    for (const word of words) {
        if (!bannedSet.has(word)) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
  }

    let mostFrequent = "";
    let maxCount = 0;

    for (const [word, count] of Object.entries(wordCounts)) {
        if (count > maxCount) {
            mostFrequent = word;
            maxCount = count;
        }
    }

    return mostFrequent;
}

// Example usage
const paragraph1 = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned1 = ["hit"];
console.log(mostFrequentNonBannedWord(paragraph1, banned1)); 

const paragraph2 = "a.";
const banned2 = [];
console.log(mostFrequentNonBannedWord(paragraph2, banned2)); 


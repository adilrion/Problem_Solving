//  748. Shortest Completing Word

const shortestCompletingWord = (li, wo) => {
    // word count
    let wc = {};
    for (char of li.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            wc[char] = (wc[char] || 0) + 1;
        }
    }
    console.log(wc);

    function checkWord(e) {
        // word count
        let wordCount = {};
        for (const word of e.toLowerCase()) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }

        // check
        for (const key in wc) {
            if ((wordCount[key] || 0) < wc[key]) {
                return false;
            }
        }
        return true;
    }

    // check word
    let shortestWord = null;
    wo.forEach((e) => {
        if (checkWord(e)) {
            if (shortestWord === null || e.length < shortestWord.length) {
                shortestWord = e;
            }
        }
    });

    return shortestWord;
};




// Example Usage
const licensePlate1 = "1s3 PSt";
const words1 = ["step", "steps", "stripe", "stepple"];
console.log(shortestCompletingWord(licensePlate1, words1)); // Output: "steps"

// const licensePlate2 = "1s3 456";
// const words2 = ["looks", "pest", "stew", "show"];
// console.log(shortestCompletingWord(licensePlate2, words2)); // Output: "pest"


// const licensePlate = "1s3 PSt",
//   words = ["step", "steps", "stripe", "stepple"];
    
// const lic = licensePlate.replace(/[0-9\s]/g, '').toLowerCase();
// lic

  
//   console.log(shortestCompletingWord(licensePlate, words));
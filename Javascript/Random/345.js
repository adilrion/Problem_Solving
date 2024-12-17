//345. Reverse Vowels of a String

var reverseVowels = function (s) {

    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const sArray = s.split("");

    // Collect all vowels from the string
  const vowelList = sArray.filter((char) => vowels.includes(char));

    // Replace vowels in the string with reversed vowels
    for (let i = 0; i < sArray.length; i++) {
      if (vowels.includes(sArray[i])) {
     
            sArray[i] = vowelList.pop(); // Pop reversed vowels one by one
            
            
        }
    }

    return sArray.join("");

};


const s = 'Adil'

console.log(reverseVowels(s));



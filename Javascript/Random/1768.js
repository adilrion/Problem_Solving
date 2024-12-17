var mergeAlternately = function (word1, word2) {
  let margeString = '';
  let rest = 0;
  

  for (let index = 0; index < word1.length; index++) {
    if (word1[index]) {
      margeString += word1[index];
      }
    if (word2[index]) {
      margeString += word2[index]
    }

    rest++
  }

  if (rest < word2.length) {
    const restOFWord = word2.slice(rest);
    margeString += restOFWord

  }


  return margeString;
};


const word1 = "abhsfkhsdfk";
const word2 = "pqrs";
console.log(mergeAlternately(word1, word2));
const findWords = (words) => {
    const result = new Array();

    const a = "qwertyuiop",
        b = "asdfghjkl",
    c = "zxcvbnm"; 
  
    for (let i = 0; i < words.length; i++) {
        const element = words[i].toLowerCase();
      
      const row = a.includes(element[0]) ? a : b.includes(element[0]) ? b : c;
      const f = [...element].every((char) => {
        return row.includes(char)
      })

      if (f) {
        result.push(words[i])
      }

        
    }

   return result
};

const words = ["Hello", "Alaska", "Dad", "Peace"];

console.log(findWords(words));

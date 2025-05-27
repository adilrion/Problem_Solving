var wordPattern = function (pattern, s) {
    let dic = new Set();
  let sp = s.split(" ");
  if(pattern.length !== sp.length) return false
    for (let i = 0; i < pattern.length; i++) {
        const element = sp[i];
      const ls = pattern[i];
    
        if (ls in dic) {
            if (dic[ls] === element) {
                continue;
            }
            return false;
        } else if (Object.values(dic).includes(element)) {
            return false;
        } else {
            dic[pattern[i]] = element;
        }
    }
    return true;
};
const pattern = "abba",
    s = "dog cat cat dog";

console.log(wordPattern(pattern, s));

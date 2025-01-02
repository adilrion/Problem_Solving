var isSubsequence = function (s, t) {
    if (s.length < 0 && t.length < 0) {
        return false
    }
    
    
     let i = 0,
         j = 0;

     while (i < s.length && j < t.length) {
         if (s[i] === t[j]) {
             i++; 
         }
         j++; 
     }

     return i === s.length;
};

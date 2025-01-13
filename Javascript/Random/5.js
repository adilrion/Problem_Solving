var longest = function (s) {

 if (s.length <= 1) return s;

 let start = 0,
     end = 0;

 function expandAroundCenter(left, right) {
     while (left >= 0 && right < s.length && s[left] === s[right]) {
         left--;
         right++;
     }
     return right - left - 1; // Length of the palindrome
 }

 for (let i = 0; i < s.length; i++) {
     // Check for odd-length palindromes
     const len1 = expandAroundCenter(i, i);
     // Check for even-length palindromes
     const len2 = expandAroundCenter(i, i + 1);
     // Get the maximum length
     const maxLen = Math.max(len1, len2);

     if (maxLen > end - start) {
         start = i - Math.floor((maxLen - 1) / 2);
         end = i + Math.floor(maxLen / 2);
     }
 }

 return s.substring(start, end + 1);

  
}

let s = "babad";

console.log(longest(s));

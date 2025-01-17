var isPalindrome = function (s) {

  if(s=== ' ') return true
    let match = s.match(/[a-zA-Z0-9]/g);

    let math = match.join("").toLowerCase();

    let l = math.split("").reverse().join("");

   return math === l;
};

let s = "ab_a",
    b = "race a! car";

console.log(isPalindrome(s));
console.log(isPalindrome(b));

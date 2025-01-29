// Reverse String
let reverseString = function (s) {


  let ll = Math.floor(s.length / 2)
  for (let index = 0; index < ll; index++) {
      const left = s[index];
      const right = s[s.length - index - 1];
    
      s[index] = right;
      s[s.length - index - 1] = left;
     
  }
  return s
  
}

// two pointer approach
const reverseArray = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++;
    right--;
  }
  return s;
}
const s = ["h", "e", "l", "l", "o"];

console.log(s.length);

// console.log(reverseString(s));
console.log(reverseArray(s));
s
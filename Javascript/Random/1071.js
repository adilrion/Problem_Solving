// 1071. Greatest Common Divisor of Strings
var gcdOfStrings = function (str1, str2) {

  // find the gcd
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // check the string validity for subtraction
  if (str1 + str2 !== str2 + str1) {
    return ""
  }

  const gcdResult = gcd(str1.length, str2.length)






    return str1.substring(0, gcdResult);
};

const str1 = "ABCABC",
    str2 = "ABC";

console.log(gcdOfStrings(str1, str2));

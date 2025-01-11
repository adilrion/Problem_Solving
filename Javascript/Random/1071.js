// 1071. Greatest Common Divisor of Strings

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let gcd = function (a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };
    console.log(str2.length);
    

    return str1.substring(0, gcd(str1.length, str2.length));
};


let str1 = "ABCABC", str2 = "ABC";

console.log(gcdOfStrings(str1, str2)); // Output: "ABC"
// 3. Longest Substring Without Repeating Characters

var length = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let tem = "",
        result = 0;

    for (let i = 0; i < s.length; i++) {
        if (!tem.includes(s[i])) {
            tem += s[i];
        } else {
            // Remove characters up to the first occurrence of the duplicate
            tem = tem.slice(tem.indexOf(s[i]) + 1) + s[i];
        }

        result = Math.max(result, tem.length);
    }

    return result;
  
}


var ob = 'object'

console.log(ob.indexOf('b'));

console.log(ob.includes('s'));
console.log(ob);

console.log(length('pwwkew'));
console.log(length("aab"));
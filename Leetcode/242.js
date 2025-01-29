const isAnagram = (s, t) => {
    let result = "";
    let l = t.length;
    for (let i = 0; i < l; i++) {
        const na = s[i];
        let ind = t.indexOf(na);
        if (ind != -1) {
            result = result + t[ind];
            t = t.replace(t[ind], "");
        } else {
            return false;
        }
    }
    return result === s;
};

// another solution
const isAnagram2 = (s, t) => {
    if (s.length !== t.length) return false;

    return s.split("").sort().join("") === t.split("").sort().join("");
};
const s = "anagram",
    t = "nagaram";
const re = s.split("").sort();
re;

console.log(isAnagram(s, t));
console.log(isAnagram2(s, t));

var strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle);
    }
    return -1;
};
console.log(strStr("sadbutsad", "sad"));

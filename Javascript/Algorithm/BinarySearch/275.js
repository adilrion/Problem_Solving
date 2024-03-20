// 275. H-Index II
var hIndex = function (citations) {
    citations.sort((a, b) => b - a);
    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }
    return hIndex;
};

console.log(hIndex([0, 1, 3, 5, 6, 7]));

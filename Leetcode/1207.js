// 1207. Unique Number of occurrences

var uniqueOccurrences = function (arr) {
  if (arr.length === 0) {
    return false
  }
    const frequencyMap = new Map();
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const frequencies = new Set(frequencyMap.values());

    return frequencyMap.size === frequencies.size;
};

let arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); 
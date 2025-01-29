// 599. Minimum Index Sum of Two Lists

const findRestaurant = (list1, list2) => {
    if (list1.length === 0 || list2.length === 0) return [];
    let result = [];
    let minSumIndex = Infinity;

    for (let i = 0; i < list2.length; i++) {
        const e = list2[i];
        const index = list1.indexOf(e);
        if (index === -1) continue;
        const indexSum = i + index;
        if (indexSum < minSumIndex) {
            minSumIndex = indexSum;
            result = [e];
        } else if (indexSum === minSumIndex) {
            result.push(e);
        }
    }
    return result;
};

let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    list2 = ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"];

console.log(findRestaurant(list1, list2));
console.log(
    findRestaurant(
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        ["KFC", "Shogun", "Burger King"]
    )
);

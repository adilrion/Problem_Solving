const isBalanced = (num) => {
    let even = 0,
        odd = 0;

    for (let i = 0; i < num.length; i += 2) {
        const e = Number(num[i]);
        const o = Number(num[i + 1]);

        even += e;
        odd += isNaN(o) ? 0 : o;
    }

    if (even === odd) {
        return true;
    } else {
        return false;
    }
};

console.log(isBalanced("24123"));

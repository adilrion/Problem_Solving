const convertToTitle = (n) => {
    const al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let row = "";
    while (n > 0) {
        n--;
        let reminder = n % 26;
        row = al[reminder] + row;
        n = Math.floor(n / 26);
    }

    return row;
};

console.log(convertToTitle(28));
console.log(convertToTitle(1000));

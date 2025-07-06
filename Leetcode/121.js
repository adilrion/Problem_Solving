var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
  }
  return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

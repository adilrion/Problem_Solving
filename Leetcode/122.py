class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        maxProfit = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i-1]:
                maxProfit += prices[i] - prices[i-1]

        return maxProfit

prices1 = [7, 1, 5, 3, 6, 4]
prices2 = [1, 2, 3, 4, 5]
prices3 = [7, 6, 4, 3, 1]


print(Solution().maxProfit(prices1))
print(Solution().maxProfit(prices2))
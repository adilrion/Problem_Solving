# #### time limit
# class Solution:
#     def maxProfit(self, prices: list[int]) -> int:
#         l = len(prices)
#         profit = 0
#         i = 0
#         while i < l:
#             n = i + 1
#             while n < l:
#                 buy = prices[i]
#                 sale = prices[n] - buy
#                 if sale > profit:
#                     profit = sale
#                 n += 1
#             i += 1
#         return profit
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        min_price = float("inf")
        max_profit = 0
        for price in prices:
            if price < min_price:
                print(min_price)
                print(max_profit)
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price

        return max_profit


prices = [7, 1, 5, 3, 6, 4]
result = Solution().maxProfit(prices)
print(result)

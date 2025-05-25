import random
import bisect


class Solution:
    def __init__(self, w: list[int]):
        self.prefix_sum = []
        sum_total = 0
        for weight in w:
            sum_total += weight
            self.prefix_sum.append(sum_total)
        self.ts = sum_total
    def pickIndex(self) -> int:
        rand = random.randint(1, self.ts)
        un = bisect.bisect_left(self.prefix_sum, rand)
        return un


solution = Solution([1, 3])
print(solution.pickIndex())

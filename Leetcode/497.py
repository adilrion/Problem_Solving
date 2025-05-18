import random
from typing import List


class Solution:

    def __init__(self, rects: List[List[int]]):
        self.rects = rects
        self.areas = []
        self.total_area = 0

        for x1, y1, x2, y2 in rects:
            area = (x2 - x1 + 1) * (y2 - y1 + 1)
            self.total_area += area
            self.areas.append(self.total_area)

    def pick(self) -> List[int]:
        rand_area = random.randint(1, self.total_area)

        rect_index = self._find_rectangle(rand_area)

        x1, y1, x2, y2 = self.rects[rect_index]

        x = random.randint(x1, x2)
        y = random.randint(y1, y2)
        return [x, y]

    def _find_rectangle(self, rand_area: int) -> int:
        left, right = 0, len(self.areas) - 1
        while left < right:
            mid = (left + right) // 2
            if rand_area > self.areas[mid]:
                left = mid + 1
            else:
                right = mid
        return left


rects = [[1, 1, 5, 5], [10, 10, 13, 13]]
solution = Solution(rects)

print(solution.pick()) 
print(solution.pick()) 

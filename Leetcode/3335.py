from collections import deque
from string import ascii_lowercase
from collections import Counter
from operator import itemgetter


class Solution:
    def lengthAfterTransformations(self, s: str, t: int) -> int:
        q = deque(itemgetter(*ascii_lowercase)(Counter(s)))

        for _ in range(t):
            q.appendleft(q.pop())
            q[1] += q[0]
        return sum(q) % (10**9 + 7)


s = "jqktcurgdvlibczdsvnsg"
t = 7517
print(Solution().lengthAfterTransformations(s, t))

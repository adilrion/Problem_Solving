class Solution:
    def isHappy(self, n: int) -> bool:
        def sum_of_digit(num: int)-> int:
          return sum(int(digit) ** 2 for digit in str(num))
        
        seen = set()
        while n!= 1:
          n = sum_of_digit(n)
          if n in seen:
            return False
          seen.add(n)
        return True
          

print(Solution().isHappy(19))
class Solution:
  def reverse(self, x: int) -> int:
    max = 2**31-1
    
    sign = -1 if x < 0 else 1
    
    x= abs(x)
    
    result = 0
    
    while x != 0:
      d = x % 10
      
      x //=10
      
      if result > (max - d) // 10:
        return 0
      
      
      result = result * 10 + d
      
    
    return result * sign
    
  

  
x = -123
r = Solution().reverse(x)
print(r)
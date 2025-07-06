# class Solution:
#     def rotate(self, nums: list[int], k: int) -> None:
#         n = len(nums)
#         k = k % n
#         nums[:] = nums[-k:] + nums[:-k]
#         print(nums)

# efficient solution
class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        n = len(nums)
        k = k % n
         
        # rotate function
        def reveres(start, end):
          while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start+=1
            end-=1

        
        # rotate the full array
        reveres(0, n-1)
        
        # rotate the first k element
        reveres(0, k-1)
        
        # rotate the last element
        reveres(k, n-1)
        
        
        
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
r = Solution().rotate(nums, k)
print(r)

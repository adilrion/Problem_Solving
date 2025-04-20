class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        n1 = m - 1
        n2 = n - 1
        p = m + n - 1
        while n1 >= 0 and n2 >= 0:
            if nums1[n1] >= nums2[n2]:
                nums1[p] = nums1[n1]
                n1 -= 1
            else:
                nums1[p] = nums2[n2]
                n2 -= 1
            p -= 1
        while n2 >= 0:
            nums1[p] = nums2[n2]
            n2 -= 1
            p -= 1
        print(nums1)


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
p = Solution()
p.merge(nums1, m, nums2, n)

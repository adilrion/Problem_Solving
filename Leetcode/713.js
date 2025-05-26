{
    const findSubArray = function (nums, k) {
        let multi,
            count = 0;

        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            if (el < k) {
                count++;
                let l = i + 1;

                multi = el;
                while (l < nums.length) {
                    multi = multi * nums[l];
                    if (multi < k) {
                        count++;
                    }
                    l++;
                }
            }
        }
        return count;
    };
    const nums = [1, 2, 3],
        k = 0;
    console.log(findSubArray(nums, k));
}

// sliding window technique
{
    const findSubArray = function (nums, k) {
        if (k <= 1) return 0;
        let left = 0,
            count = 0,
            mul = 1;
        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            mul *= el;
            while (mul >= k) {
                mul = mul / nums[left];
                left += 1;
            }

            count += i - left + 1;
        }
        return count;
    };
    const nums = [10, 5, 2, 6],
        k = 100;
    console.log(findSubArray(nums, k));
}

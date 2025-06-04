def largestSumOfAverages(nums, k):
    n = len(nums)
    # Step 1: Compute prefix sums
    prefix = [0] * (n + 1)
    for i in range(1, n + 1):
        prefix[i] = prefix[i - 1] + nums[i - 1]

    # Step 2: Initialize DP table
    dp = [[0.0] * (k + 1) for _ in range(n + 1)]

    # Step 3: Fill DP table
    for i in range(1, n + 1):
        for j in range(1, min(i, k) + 1):
            if j == 1:
                dp[i][j] = prefix[i] / i
            else:
                max_score = 0.0
                for m in range(j - 1, i):
                    avg = (prefix[i] - prefix[m]) / (i - m)
                    max_score = max(max_score, dp[m][j - 1] + avg)
                dp[i][j] = max_score

    # Step 4: Find maximum score
    return max(dp[n][j] for j in range(1, k + 1))

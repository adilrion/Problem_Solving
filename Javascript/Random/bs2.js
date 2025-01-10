function minTimeToLightK(N, K, coords) {
    // Separate negative (left) and positive (right) candles
    const leftCandles = [];
    const rightCandles = [];
    for (const x of coords) {
        if (x < 0) leftCandles.push(x);
        else if (x > 0) rightCandles.push(x);
        // If x == 0, Joy can light it instantly, effectively reducing K by 1
        // but let's ignore that corner case here unless it’s needed.
    }
    // Sort negatives ascending (e.g. -30, -10),
    // sort positives ascending (e.g. 10, 20, 50)
    leftCandles.sort((a, b) => a - b);
    rightCandles.sort((a, b) => a - b);

    // Helper to get how far left Joy must travel
    // if lighting i candles on the left side (those closest to 0)
    function distLeft(i) {
        if (i === 0) return 0;
        // "Rightmost i" among leftCandles => the i closest to 0
        // That subarray is leftCandles.slice(-i), so the farthest from 0
        // in that subarray is its first element => leftCandles[left.length - i]
        return Math.abs(leftCandles[leftCandles.length - i]);
    }

    // Helper for right side: if lighting j candles on the right (closest to 0)
    function distRight(j) {
        if (j === 0) return 0;
        // "Leftmost j" among rightCandles => the j closest to 0
        // That subarray is rightCandles.slice(0, j), farthest from 0 is the last
        // => rightCandles[j - 1]
        return rightCandles[j - 1];
    }

    let minTime = Infinity;

    // Try all ways to pick i from left, (K-i) from right
    for (let i = 0; i <= K; i++) {
        const j = K - i;
        // Check if we have enough candles on left and right
        if (i <= leftCandles.length && j <= rightCandles.length) {
            const leftDist = distLeft(i);
            const rightDist = distRight(j);
            // Option 1: round trip left, one-way right
            const cost1 = 2 * leftDist + rightDist;
            // Option 2: round trip right, one-way left
            const cost2 = leftDist + 2 * rightDist;
            minTime = Math.min(minTime, cost1, cost2);
        }
    }

    return minTime;
}

// Example usage:
const N = 5,
    K = 3;
const coords = [-30, -10, 10, 20, 50];

console.log(minTimeToLightK(N, K, coords));
// Expected output: 40

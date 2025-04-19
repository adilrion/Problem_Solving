function shortestToChar(s, c) {
    const n = s.length;
    const answer = new Array(n).fill(Infinity);
    let prev = -Infinity;

    // Forward pass to calculate distances to the closest previous occurrence of `c`
    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = i - prev;
    }

    prev = Infinity; // Reset for the backward pass

    // Backward pass to calculate distances to the closest next occurrence of `c`
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.min(answer[i], prev - i);
    }

    return answer;
}

// Example usage:
const s1 = "loveleetcode",
    c1 = "e";
console.log(shortestToChar(s1, c1)); 

const s2 = "aaab",
    c2 = "b";
console.log(shortestToChar(s2, c2));  

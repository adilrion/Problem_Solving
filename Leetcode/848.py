def shiftingLetters(s: str, shifts: list[int]) -> str:
    n = len(s)
    total_shift = 0
    shifted_chars = [""] * n

    for i in range(n - 1, -1, -1):
        total_shift = (total_shift + shifts[i]) % 26
        new_char = chr(((ord(s[i]) - ord("a") + total_shift) % 26) + ord("a"))
        shifted_chars[i] = new_char

    return "".join(shifted_chars)


# Example 1
s1 = "abc"
shifts1 = [3, 5, 9]
print(shiftingLetters(s1, shifts1))

# Example 2
s2 = "aaa"
shifts2 = [1, 2, 3]
print(shiftingLetters(s2, shifts2)) 

// 443. String Compression

var compress = function (chars) {
    let write = 0; // Index to write the result
    let read = 0; // Index to read the input array

    while (read < chars.length) {
      let char = chars[read];
      console.log(char);
      console.log(read);
        let count = 0;

        // Count the number of consecutive occurrences of the current character
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        // Write the character to the array
        chars[write] = char;
        write++;

        // If the count is greater than 1, write the digits of the count
        if (count > 1) {
            const countStr = count.toString();
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }

    // Return the new length of the array
    return write;
};



console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
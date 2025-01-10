function countNotes(amount) {
    const notes = [1000, 500, 100, 50, 10, 5, 1];

    console.log("Currency count");
  for (const note of notes) {
      console.log(note);
        // If we've reduced the amount to 0, we can stop
        if (amount === 0) break;

        // Determine how many notes of this denomination fit
    const noteCount = Math.floor(amount / note);
      console.log(noteCount);
        if (noteCount > 0) {
            console.log(`${note} ${noteCount}`);
            // Reduce the amount by the total value of these notes
            amount %= note;
        }
    }
}

// Example usage:
const inputAmount = 868;
countNotes(inputAmount);

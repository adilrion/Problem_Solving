from collections import Counter


class MyCalendarTwo:
    def __init__(self):
        self.counter = Counter()

    def book(self, start, end):
        # Increment the counter for the start and decrement it for the end
        self.counter[start] += 1
        self.counter[end] -= 1

        # Check for triple booking by tracking active overlaps
        active = 0
        for time in sorted(self.counter.keys()):
            active += self.counter[time]
            if active >= 3:
                # Triple booking detected, revert changes and return False
                self.counter[start] -= 1
                self.counter[end] += 1
                if self.counter[start] == 0:
                    del self.counter[start]
                if self.counter[end] == 0:
                    del self.counter[end]
                return False

        return True


# Example usage
myCalendarTwo = MyCalendarTwo()
print(myCalendarTwo.book(10, 20)) 

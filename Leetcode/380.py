# 380. Insert Delete GetRandom O(1)
import random


class RandomizedSet:

    def __init__(self):
        self.v = []
        self.vi = {}

    def insert(self, val: int) -> bool:
        if val in self.v:
            return False
        self.v.append(val)
        self.vi[val] = len(self.v) - 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.v:
            return False
        last_element = self.v[-1]
        index = self.vi[val]
        self.v[index] = last_element
        self.vi[last_element] = index
        self.v.pop()
        del self.vi[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.v)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()

# Initialize the RandomizedSet
randomizedSet = RandomizedSet()

# Test insert
print(randomizedSet.insert(1))
print(randomizedSet.insert(2))
print(randomizedSet.insert(2))

# Test remove
print(randomizedSet.remove(1))
print(randomizedSet.remove(3))

# Test getRandom
print(randomizedSet.getRandom())
print(randomizedSet.insert(3))
print(randomizedSet.getRandom())

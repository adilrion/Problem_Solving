def findWords(words):
  result = []
  a, b, c = ['qwertyuiop','asdfghjkl', 'zxcvbnm']
  print(a in 'q')
  for word in words:
    element = word.lower()
    row = a if element[0] in a else b if element[0] in b else c
    
    if all(char in row for char in element):
      result.append(word)
      
  return result


  
  
  
words = ["Hello", "Alaska", "Dad", "Peace"]
print(findWords(words))



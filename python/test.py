# printing output
print('hello world')

# function & global variable
g_variable = "global variable"

def my_fun():
  print("global variable: ", g_variable)

my_fun()

# difference between Local variable & global variable
def check_local_variable():
  g_variable = "this is local variable"
  print("Global Variable: ", g_variable, "; Local Variable: ", g_variable)
  
check_local_variable()
print("global variable: ", g_variable)

# data types in python
def data_types():
  x = "str"
  print(type(x))
  x = 12
  print(type(x))
  x = 12.2
  print(type(x))
  x = 1j
  print(type(x))
  x = ["list", "data", "type"]
  print(type(x))
  x = ('tuple', 'data', 'type')
  print(type(x))
  x = range(7)
  print(type(x))
  print(x)
  x = {"dict": "data Type", "new": "dict Data type"}
  print(type(x))
  x = {'set', 'data', 'type'}
  print(type(x))
  x = frozenset({'frozen set', 'data', 'type'})
  print(type(x))
  print(x)
  x = False
  print(type(x))
  x = b"Binary"
  print(type(x))
  x = bytearray(5)
  print(type(x))
  print(x)
  x = memoryview(bytes(5))
  print(type(x))
  print(x)
  x = None
  print(type(x))
  print(x)
  
data_types()


# complex data type
def c_data_type():
  a = 2+5j
  b = 5j
  print(a, b)
   
c_data_type()

# type conversion
def t_conversion():
  """ 
  Note: can't convert complex data type into the int data type
  """
  t = 3
  c = complex(t)
  print(c)

t_conversion()

import random
print(random.randrange(2, 10))


a = 'hello world'
print(a[1])
# Looping through a String
for e in a:
  print(e)

# check string
print('he' in a)
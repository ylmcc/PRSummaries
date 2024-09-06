# This program prints "Hello, world!" to the console

print("Hello, world!")

# --- Example functions ---

def add(x, y):
  """Adds two numbers together."""
  return x + y

def greet(name):
  """Greets a person by name."""
  print(f"Hello, {name}!")

# --- Using the functions ---

sum_result = add(5, 3)
print(f"The sum is: {sum_result}")

greet("Alice")

# --- Lists and loops ---

fruits = ["apple", "banana", "orange"]

for fruit in fruits:
  print(fruit)

# --- Dictionaries ---

person = {"name": "Bob", "age": 30, "city": "New York"}

print(f"{person['name']} is {person['age']} years old and lives in {person['city']}.")

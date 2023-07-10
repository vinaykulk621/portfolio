---
title: 'Python 🐍.'
subtitle: 'Some of python things.'
date: 'May 08, 2023'
author: 'Vinay Kulkarni'
blog_count: 5
---

### Hello There 🐼

Let's talk python 🐍.

___

# List

Setting up of a list


```python
my_list = list()
my_list = []
```

#### **insertion**

```python
my_list.append(1)        # Insert at the end.
my_list.insert(1,"hi")   # Insert "hi" at position 1.
my_list.extend([2,3,4])  # Insert 2,3,4 at the end.
```

**__bonus__**

```python
my_list = [1,2,3,4,5]
append = [6,7,8,9,10]
mylist.append(append)       #[1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]
mylist.extend(append)       #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mylist = mylist + append    #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### **deletion**

```python
my_list.pop()       # remove the last element from the list.
my_list.pop(1)      # remove the element at index '1' from the list.
my_list.remove(2)   # remove element '2' from the list.
```

#### **sort**

```python
my_list = [5, 4, 3, 2, 1]
my_list.sort()                  # Sort the list in-place
my_new_list = sorted(my_list)   # Sort 'my_list' and put in 'my_new_list'
```

#### **slice**

```python
my_list = [1, 2, 3, 4, 5]
new_list = my_list[:]               # Copy list 'my_list'
new_list = my_list.copy()           # Copy list 'my_list'
even_list = my_list[::2]            # Even index element in 'my_list'
reverse_list = my_list[::-1]        # reverse 'my_list'
reverse_list = my_list.reverse()    # reverse 'my_list'
```

> Working with **Tuples** is more **_memory_** and **_time_** efficient compared to working with **Lists**.

___ 

# Set

Setting up of a set

```python
my_set = set()
my_set = {1, 2, 3, 3}  # my_set = {1, 2, 3}
```

> we can perform many operations on set like **_Union_**, **_intersection_**, and **_difference_**.

___ 

# Match

Switch case version of python introduced in python-3.10

```python
color = input("Enter a color")

match color:
    case "green":
       print("Earth is green") 
    case "black":
       print("Black is cool") 
    case "pink":
       print("Barbie is pink??") 
    case "blue":
       print("sky is blue") 
    case _:
        print("You should enter a color name")
```

___ 

# Counter

Count the number of occurances of a charecter/number or anything that is itterable.

```python
from collections import Counter

word = "aaaabbbccc"
count = Counter(word)

print(count)
# Counter({'a': 4, 'b': 3, 'c': 3})

print(count.most_common(1))
# [("a", 4)]

print(count.most_common(2))
# [("a", 4), ("b", 3)]
```

<br/>
<br/>

**Good Day**
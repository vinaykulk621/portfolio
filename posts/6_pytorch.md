---
title: 'Learning Pytorch basics 🔥.'
subtitle: 'Some basic stuff learnt in pytorch.'
date: 'May 14, 2023'
author: 'Vinay Kulkarni'
---

### Hello There 🐼

Let's talk pytorch 🔥.

___

```python
import torch
```

## Tensors

You can reperesent anything in terms of numbers or you can say **tensors**. As i have understood things, There are four ways to represent things in numerical format (tensor) ??

1. Scalar ==> 0-dimension
2. Vecotr ==> 1-dimension
3. Matrix ==> 2-dimension
4. Tensor ==> 3-dimension

```python
scalar = torch.tensor(1)
vector = torch.tensor([1])
MATRIX = torch.tensor([[1, 1],
                       [2, 2]])
TENSOR = torch.tensor([[[1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]]])
```

> _scalar_ and _vectors_ ==> lowercase() <br/> _matrix_ and _tensor_ ==> uppercase variable names.

#### **Random tensor**

```python
torch.rand(3,4)

# result
tensor([[0.8275, 0.2870, 0.9965, 0.4298],
        [0.3491, 0.2249, 0.5350, 0.9172],
        [0.8425, 0.4480, 0.6965, 0.2554]])
```

#### **Zero tensor**

```python
torch.zeros(3,4)

# result
tensor([[0., 0., 0., 0.],
        [0., 0., 0., 0.],
        [0., 0., 0., 0.]])
```

#### **Ones tensor**

```python
torch.ones(3,4)

# result
tensor([[1., 1., 1., 1.],
        [1., 1., 1., 1.],
        [1., 1., 1., 1.]])
```

#### **Mathematical operations**

```python
tensor = torch.tensor([1, 2, 3])    # tensor([1, 2, 3])

# Addition
tensor = tensor + 10    # tensor([11, 12, 13])

# Subtraction
tensor = tensor - 10    # tensor([-9, -8, -7])

# Multiplication
tensor = tensor * 10    # tensor([10, 20, 30])

# Matrix Multiplication
tensor = tensor * tensor    # tensor(14)
```


#### **Aggregation operations**

```python
x = torch.arange(0, 100, 20)    #tensor([0, 20, 60, 80])

# Minimum
x.min()         #tensor(0) <--Value
x.argmin()      #tensor(0) <--position

# Maximum
x.max()         #tensor(80) <--Value
x.argmin()      #tensor(3) <--position

# Sum
x.sum()         #tensor(160) <--Value

# Mean
x.mean()        #tensor(40) <--Value
```

And that covers the basic of pytorch datatypes and stuff.

<br/>
<br/>

**Good Day**
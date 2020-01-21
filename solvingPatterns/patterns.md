# Common Problem Solving Patterns
Many problems, intuitively, could be solved easily with a nested loop (e.g. find duplicates in an array). Nested loops go hand in hand with O(n^2) time complexity :(

There are patterns that help to achieve the same result with O(n)complexity:
- Frequency Counter
- Multiple Pointers
- SLiding Window

## Frequency Counter
-> often useful when problem requires to calculate the frequency of elements

## Multiple Pointers
-> Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
-> very efficient for solving problems with minimal space complexity as well

## Sliding Window
-> Creating a **window** which can be either an array or number from one position to another
-> depending on a certain condition, the window either increases or closes (and a new window is created)
-> very useful for **keeping track of a subset of data in an array/string**


##### Describe: arrayBuild
**Test 1:** 
*"It should return an array of one element if fed the int 0 as input input Test will take integers as input"*
***Code:***
```javascript
const userInput = 0;
wordCounter(userInput);
```
***Expected Output:***
```javascript
[0]
```

**Test 2:** 
*"It should return an array of elements from zero to the userInput(a positive integer). The length of the array should be one more than the value of userInput"*
***Code:***
```javascript
const userInput = 3;
wordCounter(userInput);
```
***Expected Output:***
```javascript
[0,1,2,3]
```

**Test 3:** 
*"It should return an array of elements from userInput(a negative integer) zero. The length of the array should be one more than the absolute value of userInput"*
***Code:***
```javascript
const userInput = -3;
wordCounter(userInput);
```
***Expected Output:***
```javascript
[-3,-2,-1,0]
```

**Test 4:** 
*"It should return an array as described by Test 2 or Test 3 depending on sign of input. For numbers containing the digit(s) 1, 2, or 3 that number should be replaced with a string"*
***Code:***
```javascript
const userInput = -4;
wordCounter(userInput);
```
***Expected Output:***
```javascript
[-4, "str", "str", "str", 0]
```
## End
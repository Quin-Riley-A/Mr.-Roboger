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
## End
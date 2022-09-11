##### Describe: arrayBuild
**Test 1:** 
*"It should return an array of one element if fed the int 0 as input input Test will take integers as input"*
***Code:***
```javascript
const userInput = 0;
arrayBuild(userInput);
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
arrayBuild(userInput);
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
arrayBuild(userInput);
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
arrayBuild(userInput);
```
***Expected Output:***
```javascript
[-4, "str", "str", "str", 0]
```

**Test 5**
*"It should return an array where each string varies based on present digits."*
***Code:***
```javascript
const userInput = -4;
arrayBuild(userInput);
```
***Expected Output:***
```javascript
[-4, "Won't you be my neighbor?", "Boop!", "Beep!", 0]
```  

**Test 6**
*"It should return an array where strings change based on present digits. When a number in the sequence would contain a 3, it asks "Won't you be my neighbor [name]?" and includes a name specified by via input.
***Code: ***
```javascript
const userNum = -4
const userName = "Fleabrou"
arrayBuild(userNum, userName);
```
***Expected Output:***
```javascript
[-4, "Won't you be my neighbor, Fleabrou?", "Boop!", "Beep!", 0]
```


## End
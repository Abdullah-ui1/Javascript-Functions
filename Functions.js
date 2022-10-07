// Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.

function area(l1, l2) {
  var areaofrec = l1 * l2;
  return areaofrec;
}
console.log(area(5, 7));
/* 

 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(crazySum(20, 20));

/* 
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(a) {
  var bAbs = Math.abs(19);
  var aAbs = Math.abs(a);
  if (a > 19) {
    return (bAbs - aAbs) * 3;
  } else {
    return bAbs - aAbs;
  }
}

console.log(crazyDiff(5));

/* 
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n == 400) {
    return true;
  }
}

console.log(boundary(400));

/* 
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(a) {
  if (a.startsWith("Strive")) {
    return a;
  } else {
    return "Strive " + a;
  }
}

console.log(strivify("for greatness!"));

/* 
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(a) {
  if (a % 3 == 0 || a % 7 == 0) {
    return true;
  }
}

console.log(check3and7(21));

/* 
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(a) {
  return a.split("").reverse().join("");
}

console.log(reverseString("population number"));

/* 
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(a) {
  var strArr = a.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}

console.log(upperFirst("The world is flat!"));

/* 
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(a) {
  var newStr = a.slice(1, -1);
  return newStr;
}

console.log(cutString("Hypothetical"));

/* 
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
  var randArr = [];
  for (var i = 1; i <= n; i++) {
    randArr[i] = Math.floor(0 + Math.random() * 10);
  }
  return randArr;
}

console.log(giveMeRandom(3));

/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let str = n.toString();
    let myArray= str.split("");
    return (Math.max.apply(null, myArray)-Math.min.apply(null, myArray))
};

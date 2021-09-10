/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
    let result=[];
    result[0] = input[0];
    for (i = 1; i < input.length; i++) { 
        result.push(result[i-1] + input[i])
    }
    return result
   
};

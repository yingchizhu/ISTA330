/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var digitsGroup = {};
    for (let i = 1; i <= n; i++) {
        let index = 0;
        let x = i;
        while(x > 0) {
            index += x % 10;
            x = Math.floor(x / 10);
            
        }
        if (index in digitsGroup) {
            digitsGroup[index]++;
        }
        else {
            digitsGroup[index] = 1;
        }
    }
    

    var max = 0;
    var count = 0;
    for (let i in digitsGroup) {

        if (digitsGroup[i] > max) {
            max = digitsGroup[i];
            count = 0;
        } 
        if (digitsGroup[i] === max) {
            count++;
        } 
    }
    return count;
};
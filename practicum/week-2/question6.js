/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {

    if(input.length%2 ==0){
        var index =input.length/2 - 1
        return ((input[index]+input[index+1])/2);
        

    }
    else{
        
        return input[Math.ceil((input.length)/2)]
    }

};
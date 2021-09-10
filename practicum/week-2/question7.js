/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let myArray=new Array()
    let count =0;
    for (var i = 0;i< (input.length); i++){
        count=0;
        for(var j = 0;j<(input.length); j++){
            if (i!=j){
                if(input[i]<input[j] && input[j]%2 ==0){
                    count +=1
                }
            }
        }
        myArray.push(count);

    }
    return myArray;
};

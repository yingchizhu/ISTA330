/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var ele = -1;
    var n = input.length/2
    for(var i=0;i<input.length-1; i++){
        var count =0;
        for(var j=i+1; j<input.length;j++){
            if(input[i]==input[j]){
                count++;
            }


        }
        if (count>=2){
            ele=input[i];
            
        }
    
    }
    return ele;
    

};
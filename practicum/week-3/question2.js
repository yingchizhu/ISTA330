
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
         let a=input[0];
         let b= input[0];
         for(var i=1;i<input.length; i++){
                 a=Math.max(input[i], a+input[i]);
                 b = Math.max(b,a);
         }

         return b;

     
    
 };

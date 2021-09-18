/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    if (n <2){
        return n;
    }
    
    let output =[0,1];
    for(let i=2;i<=n; i++){
        output.push(output[i-2]+output[i-1]);
      
    }
    
    return output[n];
  };




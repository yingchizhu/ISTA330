/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var triangle =[];
  triangle.push([1]);
  let add = [];
  while(triangle.length< n) {
    var mynew = []
    mynew[0] = 1;
    for(var i=0; i<add.length -1; i++){
      mynew[i+1] = add[i]+add[i+1];
    }
    mynew.push(1);
    triangle.push(mynew);
    add = mynew;

  }
  return triangle;


};
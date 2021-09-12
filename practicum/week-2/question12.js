/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var array = input.split("");
  var max = 0;
  for (i = 0; i < array.length; i++){
    let count = [0, 0];
    let flag = ["a", "b"];
    let f = 1;
    if (array[j] == flag[0])
      f = 0;
      
    for (j = i; j < array.length; j++)
    {
      if (flag[f] != array[j])
      {
        f = (f + 1) % 2
        if (count[f] != 0)
          break;
      }
      if (array[j] == "a")
      {
        count[0]++;
      }
      else if (array[j] == "b")
      {
        count[1]++;
      }
      if (count[0] == count[1])
      {
        break;
      }
    }
    if (count[0] == count[1])
    {
      max++;
      i = j;
    }
  }
  return max;
}
  

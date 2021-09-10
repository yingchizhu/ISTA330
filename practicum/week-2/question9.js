/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    let curr_index=0;
    let word= [];
    for (i = 0;i<input.length;i++){
        curr_index=shuffleIndices[i];
        word[curr_index] = input[i];
    }
    return word.join('');
};
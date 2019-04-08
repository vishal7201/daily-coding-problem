/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

var firstMissingPositive = function(arr) {
    arr = segregatePositive(arr);
    for (var i = 0; i < arr.length; i++) {
      var index = Math.abs(arr[i]) - 1;
      if ((index < arr.length) && (arr[index] > 0)) {
        arr[index] *= -1;
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        return i + 1;
      }
    }
    return i + 1;
  };
  
  var segregatePositive = function(arr) {
    return arr.filter(item => item > 0);
  }
  
  // Test cases : 
  
  var arr = [3, 4, -1, 1];
  console.log(firstMissingPositive(arr)); // 2
  
  arr = [1, 2, 0];
  console.log(firstMissingPositive(arr)); // 3
  
  arr = [1, 1]
  console.log(firstMissingPositive(arr)); // 2
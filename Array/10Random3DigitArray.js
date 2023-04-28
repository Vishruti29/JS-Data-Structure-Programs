// 1. Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

// Step 1: Generate 10 random 3-digit numbers
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100); // generates random number between 100 and 999
}
console.log("Generated array: ", arr);

// // Step 2: Find the 2nd largest and 2nd smallest elements in the array
// let max1 = arr[0], max2 = -Infinity;
// let min1 = arr[0], min2 = Infinity;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] > max2 && arr[i] !== max1) {
//     max2 = arr[i];
//   }

//   if (arr[i] < min1) {
//     min2 = min1;
//     min1 = arr[i];
//   } else if (arr[i] < min2 && arr[i] !== min1) {
//     min2 = arr[i];
//   }
// }

// console.log("Second largest element: ", max2);
// console.log("Second smallest element: ", min2);

// Sort the array
arr.sort(function(a, b) {
    return a - b;
  });
  
  // Find the 2nd largest and 2nd smallest element
  let secondLargest = arr[arr.length - 2];
  let secondSmallest = arr[1];
  
  // Print the array and the results
  console.log("Array: " + arr);
  console.log("2nd largest element: " + secondLargest);
  console.log("2nd smallest element: " + secondSmallest);
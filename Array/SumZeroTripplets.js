//4. Write a Program to show Sum of three Integer adds to ZERO

function findTriplets(arr) {
    let n = arr.length;
    let found = false;
    
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] == 0) {
            console.log(`${arr[i]}, ${arr[j]}, ${arr[k]}`);
            found = true;
          }
        }
      }
    }
  
    if (!found) {
      console.log("No triplets found");
    }
  }
  
  // Example usage
  let arr = [1, 3, -4, 5, -1, -6, 2, 7, -8];
  findTriplets(arr);
  
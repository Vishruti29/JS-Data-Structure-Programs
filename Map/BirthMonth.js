// 2. Write a Program to generate a birth month of 50 individuals
// between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print.

// function to generate a random birth month
function generateBirthMonth() {
    // randomly select a number between 1 and 12 to represent the months
    const month = Math.floor(Math.random() * 12) + 1;
    return month;
  }
  
  // create an array to store the birth months of 50 individuals
  const birthMonths = [];
  
  // generate the birth months of 50 individuals
  for (let i = 0; i < 50; i++) {
    // generate a random birth month and add it to the array
    const month = generateBirthMonth();
    birthMonths.push(month);
  }
  
  // create an object to store the counts of individuals in each birth month
  const counts = {};
  
  // loop through the birth months and count the number of individuals in each month
  birthMonths.forEach(month => {
    if (counts[month]) {
      counts[month]++;
    } else {
      counts[month] = 1;
    }
  });
  
  // loop through the counts object and print the months with more than one individual
  console.log("Months with more than one individual:");
  for (const month in counts) {
    if (counts[month] > 1) {
      console.log(`Month ${month}: ${counts[month]} individuals`);
    }
  }
  


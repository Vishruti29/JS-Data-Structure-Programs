//5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
//etc and store them in an array

let repeatedDigits = [];
for (let i = 10; i < 100; i++) {
  let tensDigit = Math.floor(i / 10);
  let onesDigit = i % 10;
  if (tensDigit === onesDigit) {
    repeatedDigits.push(i);
  }
}
console.log(repeatedDigits);

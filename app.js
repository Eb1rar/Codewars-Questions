// //!Sum of Positive

// const positiveSum = () => {
//   let numbers = [1, 0, -4, 12];
//   let sum = numbers.reduce((a, b) => a + (b > 0 ? b : 0));
//   return sum;
// };
// console.log(positiveSum());

//* OR

// const positiveSum = (arr) => {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// };
// console.log(positiveSum([1, -4, 5, 65]));

//! Square(n) Sum
// const squareSum = (numbers)=>{
//   return numbers.reduce((a,b) => a+(b**2),0)
//   }
//   console.log(squareSum([1, 2, 2]))

//! Sum of two lowest positive integers
// const sumTwoSmallestNumbers = (arr) => {
//   arr.sort((a, b) => a - b);
//   return (sum = arr[0] + arr[1]);
// };
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

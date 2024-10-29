// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];  
const maxValue = findMaximum(numbers);  
const minValue = findMinimum(numbers);  

console.log("Maximum:", maxValue); 
console.log("Minimum:", minValue);





// Sum of Array: Create a function that calculates the sum of all elements in an array.
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];  
const totalSum = sumArray(numbers);  

console.log("Sum of array elements:", totalSum);





// Filter Array: Implement a function that filters out elements from an array based on a given condition.
const isOdd = (num) => num % 2 !== 0;  

// Sample array  
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];  

// Filtering out even numbers  
const oddNumbers = filterArray(numbers, isOdd);  

console.log("Filtered array (odd numbers):", oddNumbers);

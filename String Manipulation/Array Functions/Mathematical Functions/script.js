// Factorial: Write a function to calculate the factorial of a given number.
int main() {  
    int number;  
    printf("Enter a number: ");  
    scanf("%d", &number);  
    printf("Factorial of %d is %d\n", number, factorial(number));  
    return 0;  
}



// Prime Number Check: Create a function to check if a number is prime or not.
const numberToCheck = 29;  
const isNumberPrime = isPrime(numberToCheck);  

console.log(`${numberToCheck} is prime:`, isNumberPrime);



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
const numberOfTerms = 10;  
const fibonacciNumbers = generateFibonacci(numberOfTerms);  

console.log(`Fibonacci sequence up to ${numberOfTerms} terms:`, fibonacciNumbers);
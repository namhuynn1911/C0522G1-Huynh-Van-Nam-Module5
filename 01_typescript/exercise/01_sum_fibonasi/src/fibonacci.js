// function sumFibonacci(amount: number): string {
//     let firstNumber: number = 0;
//     let secondNumber: number = 1;
//     let thirdNumber: number;
//     let sumNumber: number = firstNumber + secondNumber;
//     let sumString: string = firstNumber + "," + secondNumber;
//     for (let i = 3; i <= amount; i++) {
//         thirdNumber = firstNumber + secondNumber;
//         sumNumber += thirdNumber;
//         sumString += "," + thirdNumber;
//         firstNumber = secondNumber;
//         secondNumber = thirdNumber;
//     }
//     return "Dãy Fibonacci: " + sumString + " Tổng Fibonacci: " + sumNumber;
// }
// console.log(sumFibonacci(6));
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var sum = 0;
for (var i = 1; i <= 5; i++) {
    console.log(fibonacci(i));
    sum = sum + fibonacci(i);
}
console.log("Tổng 20 số fibonacci đầu tiên là: " + sum);

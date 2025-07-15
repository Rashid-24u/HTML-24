// for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


// while loop
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }


// // do-while loop
// let i = 0;
// do{
//     console.log(i);
//     i++;
// } while(i<6);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// continue Statement:


// for (let i = 0; i < 6; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(i);
//     }




// Break Statement:

// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }





let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log(fact);





// function factorial(n) {
//     if (n < 0) 
//         return "Factorial not defined for -ve numbers";
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }


// let num = 6;
// console.log(`Factorial of ${num} is ${factorial(num)}`);

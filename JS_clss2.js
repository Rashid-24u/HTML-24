// let name="John";
// let age=23;
// console.log(`my name is ${name} and i am ${age} years old.`);


// let age=20;
// if (age<18){
//     console.log("You are a minor.");
// } else if (age>=18 && age<60){
//     console.log("You are an adult");
// } else {
//     console.log("You are a senior citizen.");
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let no=90;
// if (no>0){
//     console.log("+ve number");
// } else if (no<0){
//     console.log(`${no} -ve number`);
// } else {
//     console.log("Zero..");
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.


// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("invalid day")
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.


// let vowels="d";

// switch (vowels) {
//     case "a":
//         console.log("is a vowel");
//         break;
//     case "e":
//         console.log("is a vowel");
//         break;
//     case "i":
//         console.log("is a vowel");
//         break;
//     case "o":
//         console.log("is a vowel");
//         break;
//     case "u":
//         console.log("is a vowel");
//         break;
//     case "A":
//         console.log("is a vowel");
//         break;
//     case "E":
//         console.log("is a vowel");
//         break;
//     case "I":
//         console.log("is a vowel");
//         break;
//     case "O":
//         console.log("is a vowel");
//         break;  
//     case "U":
//         console.log("is a vowel");
//         break;          
//     default:
//         console.log("not a vowels")
// }


// let vowels="A";

// switch (vowels) {
//     case "a":
    
//     case "e":
    
//     case "i":
    
//     case "o":
    
//     case "u":
    
//     case "A":
    
//     case "E":
    
//     case "I":
    
//     case "O":

//     case "U":
//         console.log("is a vowel");
//         break;          
//     default:
//         console.log("not a vowels")
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// let mark=89;
// switch (mark){
//     case mark>=100 :
//         console.log(`mark: ${mark} A grade`);
//         break;
//     case mark>=80 :
//         console.log(`mark: ${mark} B grade`);
//         break;
//     case mark>=60 :
//         console.log(`mark: ${mark} C grade`);
//         break;

// }

let mark = 75;

switch (true) {
    case mark < 0 || mark > 100:
        console.log("Enter a valid mark.");
        break;
    case (mark >= 90 && mark <= 100):
        console.log(`mark: ${mark} A grade`);
        break;
    case (mark >= 80 && mark < 90):
        console.log(`mark: ${mark} B grade`);
        break;
    case (mark >= 60 && mark < 80):
        console.log(`mark: ${mark} C grade`);
        break;
    case (mark >= 40 && mark < 60):
        console.log(`mark: ${mark} D grade`);
        break;
    default:
        console.log(`F grade`);
}


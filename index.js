//Calculator using Swtich case

let data = process.argv;
console.log(data);

let opr = data[2];
let a = data[3];
let b = data[4];

// if (opr == "Add"){
//     console.log(`${opr} of ${a} and ${b} : ${b - a}`)
// }
switch(opr){
    case "Add": console.log(`Additiion of ${a} and ${b}: ${ Number(a) + Number(b)}`);
    break;
    case "Sub" : console.log(`Substraction of ${a} and ${b}: ${a - b}`);
    break;
    case "Multi" : console.log(`Multiplication of ${a} and ${b}: ${a * b}`);
    break;
    case "Div" : console.log(`Divide of ${a} and ${b}: ${a / b}`);
    break;
    case "Modulus" : console.log(`Modulus of ${a} and ${b}: ${a % b}`);
    break;
    default: console.log("Enter opr and number for calculation");
    break;
}
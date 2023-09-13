// Calculator usinf If Else
let data = process.argv;
console.log(data);

let opr = data[2];
let a = data[3];
let b = data[4];

if (opr == "Add"){
    console.log(`Additiion of ${a} and ${b}: ${ Number(a) + Number(b)}`);
}
else if (opr == "Sub"){
    console.log(`Substraction of ${a} and ${b}: ${a - b}`);
}
else if (opr == "Multi"){
    console.log(`Multiplication of ${a} and ${b}: ${a * b}`);
}
else if (opr == "Div"){
    console.log(`Divide of ${a} and ${b}: ${a / b}`);
}
else if (opr == "Modulus"){
    console.log(`Modulus of ${a} and ${b}: ${a % b}`);
}
else{
    console.log("Enter opr and number for calculation");
}
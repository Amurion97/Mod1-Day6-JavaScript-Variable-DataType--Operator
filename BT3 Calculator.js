const buttons = new Map([
    ["addition", 11],
    ["subtraction", 12],
    ["multiplication", 13],
    ["division", 14]
]);

function digitCount(text){
    console.log(text.toString().length);
    if (text.toString().indexOf(".") < 0) {
        return 0;
    }
    else {
        return text.toString().length - text.toString().indexOf(".") - 1;
    }

}

function calculator(operatorNo) {
   let num1 = parseFloat(document.getElementById("num1").value);
   let num1digit = digitCount(document.getElementById("num1").value);
   console.log("num1: "+num1digit);

   let num2 = parseFloat(document.getElementById("num2").value);
   let num2digit = digitCount(document.getElementById("num2").value);
   console.log(num2);

   let result;
   let resultDigit = num1digit+num2digit;
   // console.log(operatorNo);
   switch (operatorNo){
       case 11:
           result = num1+num2;
           break;
       case 12:
           result = num1-num2;
           break;
       case 13:
           result = num1*num2;
           break;
       case 14:
           result = num1/num2;
           resultDigit = num1digit + digitCount((1/num2).toString());
           break;
   }
   console.log(result);

   result = result.toFixed(resultDigit);
   console.log(result);
   return result;
}

function printResult(result) {
    document.getElementById("result").innerHTML = result;
    return 1;
}


let additionID = buttons.get("addition");
let addition = document.getElementById("but"+additionID.toString());
addition.addEventListener("click", function (){
    printResult(calculator(additionID))
});

let subtractionID = buttons.get("subtraction");
let subtraction = document.getElementById("but"+subtractionID.toString());
subtraction.addEventListener("click", function (){
    printResult(calculator(subtractionID))
});

let multiplicationID = buttons.get("multiplication");
let multiplication = document.getElementById("but"+multiplicationID.toString());
multiplication.addEventListener("click", function (){
    printResult(calculator(multiplicationID))
});

let divisionID = buttons.get("division");
let division = document.getElementById("but"+divisionID.toString());
division.addEventListener("click", function (){
    printResult(calculator(divisionID))
});
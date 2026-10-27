
var choice=prompt("Enter 1 for meter to kilometers, 2 for meter to centimeters, 3 for kilometers to meters, 4 for  kilometers to centimeters, 5 for centimeters to meters, 6 for centimeters to kilometers, 7 for Exponentiation.");
inputtaking();
if(choice == "1"){
    metertokilometers(firstNum);
}
else if(choice == '2'){
    metertocentimeters(firstNum);
}
else if(choice == '3'){
    kilometerstometers(firstNum);
}
else if(choice == '4'){
    kilometerstocentimeters(firstNum);
}
else if(choice == '5'){
    centimeterstometers(firstNum);
}
else if(choice == '6'){
    centimeterstokilometers(firstNum);
}
else if(choice == '7'){
    exponentiation(firstNum,secondNum);
}
function metertokilometers (num1){
    var result = num1/1000;
    console.log("The result of "+ num1+ " converted is"+ result + ".");
}
function metertocentimeters(num1){
    var result = num1*100;
    console.log("The result of "+ num1+ " converted is "+ result+ ".");
}
function kilometerstometers(num1){
    var result = num1*1000;
    console.log("The result of"+ num1 +"converted is" + result  +".");
}
function kilometerstocentimeters(num1){
    var result=num1*100000;
    console.log("The result of" + num1 +"converted is" + result +".");
}
function centimeterstometers(num1){
    var result=num1/100;
    console.log("The result of " + num1 +"converted is" + result +".");
}
function centimeterstokilometers(num1){
    var result=num1*10000;
    console.log("The result of the number" + num1  +"converted is" + result +".");
}
function exponentiation(num1,num2){
    var result=num1**num2;
    console.log("The result of the number"+ num1+"converted is" + result +".");
}
function inputtaking()
{
    if(choice == 7){
         firstNum  = prompt("Please enter a number");
        secondNum =prompt("Please enter a number") ;
    }
    else{
        firstNum= prompt("Please enter a number")
    }
}

    
  
  

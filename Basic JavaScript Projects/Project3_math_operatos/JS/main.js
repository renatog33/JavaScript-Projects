function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = addition; //Addition
}

function sub_Function() {
    var sub = 3 - 10;
    document.getElementById("Subtract").innerHTML = sub; //Subtraction
}
function mult_Function() {
    var mult = 4 * 10;
    document.getElementById("Multiply").innerHTML = mult;  //Multiplication
}

function div_Function() {
    var div = 100 / 25;
    document.getElementById("Divide").innerHTML = div;  //Division
}

function more_Math() {
    var mops = (1+2) * 10;
    document.getElementById("Combo").innerHTML = "1 plus 2, multiplied by 10 equals " + mops; //Multiple Operators
}

function modulus_Operator() {
    var mo = 1000 % 11;
    document.getElementById("Modulus").innerHTML =  mo; //Modulus Operator
}

function negation_Operator() {
    var no = 100000;
    document.getElementById("Negop").innerHTML =  -no; //Negation Operator
}

function inc_One() {
    var I = 100; I++;
    document.getElementById("Inc").innerHTML = I; //Increment number by 1
}

function dec_One() {
    var D = 51.50; D--;
    document.getElementById("Dec").innerHTML = D; //Decrement number by 1
}

function random_Number() {
    var R = (Math.random() * 1000);
    document.getElementById("Ran").innerHTML = R; //Random number (between 0-1000) generator on button clck
}

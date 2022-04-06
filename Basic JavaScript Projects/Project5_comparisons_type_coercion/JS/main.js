document.write(typeof 100); // 1. The “document.write()” method and “type of” operator to display the data type of number


function too_Function() {
    var too = (typeof "Ten");
    document.getElementById("Dt").innerHTML = too;  //1. "Type of" Operator
}

aaa=9
bbb="pigs"
document.write(aaa+bbb)  //2. Write an expression combining a string and a number.

function my_Test() {
    document.getElementById("Test").innerHTML = 0/0; //NaN result (short for “Not a Number”)
}

function my_Test1() {
    document.getElementById("Test1").innerHTML = isNaN('This is a string'); //check whether or not something is a number by using the isNaN() function
}

function my_Test2() {
    document.getElementById("Test2").innerHTML = isNaN(123);//check whether or not something is a number by using the isNaN() function
}

function my_Test3() {
    document.getElementById("Test3").innerHTML = 2E333; //using the document.getElementById() method, write a large enough number  display “Infinity” 
}

function my_Test4() {
    document.getElementById("Test4").innerHTML = -2E333; //using the document.getElementById() method, write a large enough negative number to display "- Infinity” 
}

document.write(10 > 2) //3. . operatro

document.write(10 < 2)  //3. < operator

console.log(2 + 2);

console.log(100 > 1000)

document.write(10 == 10)

document.write(10 == 11) //3. == operator

aa=10
bb=10
document.write(aa===bb); //3. === operator: Return true by ensuring to match the data type and value.

cc=10
dd="nine"
document.write(aa===dd); //Return false by writing a different data type and different value.

cc=10
dd="ten"
document.write(aa===dd); //Return false by writing a different data type but the same value for both.

cc=10
dd=9
document.write(aa===dd); //Return false by writing the same data type but a different value for both.

document.write(11>10 && 16>15) //3. &&  operator to display true and false.
document.write(11>10 && 3>15)

document.write(11>10 || 12>15) //3. || operator to display true and false.
document.write(9>10 || 9>15)

document.write(!(100 > 50)) //3.  ! operator







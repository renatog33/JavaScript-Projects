if (100 == 100) { //If statement
    document.write("The left number is equal to the right number." + "<br>")
}

var X = 10;  // 1. global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 +"<br>");
}
Add_numbers_1();
Add_numbers_2();


function Add_number_1() {  // 1. local variable.
    var x = 10;
    document.write(15 + x + "<br>");
}
Add_number_1();

function Add_number_2() {  //  3. intentional error
    console.log(x + 100);
}
Add_number_2();

function get_Date() {  // 2. Function that includes an if statement
    if (new Date().getHours() < 21) {
        document.getElementById("Office Hours").innerHTML = "Yes, instructors are available.  Please contact" +
        "them by the methods provided on your Student Information Sheet.";
    }
}

function Rental_Function() {
    Age = document.getElementById("Age").value;
    if (Age >=21) {
        Rent = "You are old enough to rent a car!";
    }
    else {
        Rent = "You are not old enough to rent a car!";
    }
    document.getElementById("Can_you_rent").innerHTML = Rent;
}

function Time_function() { // 4. Time function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time , 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
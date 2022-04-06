function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Vote_Function() {  //1.  Write a function using HTML and JavaScript that utilizes a ternary operation using input from the browser
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You can":"You are not old enough to";
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";
}

function Vehicle(Make, Model, Year, Color) {  //2. Write a constructor function that uses the “new” and “this” keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = //3.  Create a function to display the results of the constructor function within an HTML element
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age) {
    this.Person_first = first;
    this.Person_last = last;
    this.Person_age = age;  //RESERVED KEYWORD CHALLENGE - breaks functionality - change "age" to "case" and witness error messages in the console log
} 
var Jack = new Person("Jack", "Cross", 40)
var Emily = new Person("Emily", "Smith", 50)
function myPerson() {
    document.getElementById("Person").innerHTML = 
    Jack.Person_first + " " + Jack.Person_last +
    " is a " + Jack.Person_age;
} 

function count_Function() {
   document.getElementById("Nested_function").innerHTML = Count ();  //4. Write a nested function
   function Count() {
       var Starting_point = 9;
       function Plus_one() {Starting_point += 1;}
       Plus_one();
       return Starting_point;
   }
}
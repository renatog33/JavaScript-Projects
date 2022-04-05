function My_First_Funtion() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;  //A function to add text after the "Click me!" button is triggered
}

function myFunction () {
    var sentence = "I am learning";
    sentence += " a lot from the Tech Academy!";  //A function that uses the += operator
    document.getElementById("Concatenate").innerHTML = sentence;
}
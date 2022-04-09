let looper=""; //1. A function that utilizes a while loop
let i = 0;
while (i < 10) {
    looper += "<br>The number is " + i;
    i++;
}
document.getElementById("wloop").innerHTML = looper;


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Voilin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {  //2. A function that utilizes a for loop
    for (Y = 0; Y < Instruments.length; Y++) 
    Content += Instruments[Y] + "<br>";
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Loop() {  //3. A function that utilizes an array
    var Team = []
    Team[0] = "Golden State Warriors";
    Team[1] = "Los Angeles Clippers";
    Team[2] = "Los Angeles Lakers";
    Team[3] = "Phoenix Suns";
    Team[4] = "Sacramento Kings";
    document.getElementById("Array").innerHTML = "The teams in the NBA Pacific Conference are the: " +Team[0] +", "
    +Team[1]+", " +Team[2] +", " +Team[3] +", and " +Team[4]+".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand: "Gibson", color:"sunburst"};
    Musical_Instrument.color = "black";
    Musical_Instrument.price = "$1,200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color +" " 
    +Musical_Instrument.brand +" " +Musical_Instrument.type +" is " +Musical_Instrument.price +".";
}

var rg = myFunction(3, 4); // JS Result
document.getElementById("result").innerHTML = rg;
function myFunction(a, b) {
    return a * b;  
}

let course = { //4. An object creating using the “let” keyword
    department: "History",
    title: "HST 385U: Late Imperial Middle East",
    description:  "topics include the structure and politics of the Ottoman and Qajar empires.",
    units: 3.0,
    summary: function() {
        return this.title +" is a " +this.units +" units "+this.department +" Department course in which "+this.description;
        }
};
document.getElementById("course").innerHTML = course.summary();

let text =""; //Break
for (let i = 0; i < 15; i++) {
    if (i === 12) { break; }
    text += "The number is " + i + "<br>";
  }
  document.getElementById("break").innerHTML = text;

let text1 =""; //Continue
for (let i = 0; i < 3; i++) {
    if (i === 2) { continue; }
    text += "The number is " + i + "<br>";
  }
  document.getElementById("cont").innerHTML = text1;
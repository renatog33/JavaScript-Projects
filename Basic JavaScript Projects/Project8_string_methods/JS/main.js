function full_Sentence() {  // concat()
    var part_1 = "My name ";
    var part_2 = "is Renato Grizelj, ";
    var part_3 = "and I live in Portland, OR.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Con").innerHTML = whole_sentence;
}

function slice_Method() {  // slice()
    var Sentence = "Don't let me down";
    var Section = Sentence.slice(12,17);
    document.getElementById("Slice").innerHTML = Section;
}

function to_Upper() {
    let text = document.getElementById("Upper").innerHTML;
    document.getElementById("Upper").innerHTML = 
    text.toUpperCase();
}

function my_Search() {
    let text = "You can't have your pudding, if you don't eat your meat";
    let position = text.search("pudding");
    document.getElementById("Search").innerHTML = 
    position;
}

function string_Method() {  //toString()
    var RG = 33
    document.getElementById("Numbers_to_String").innerHTML = 
    RG.toString();
}

function to_Precision() { //toPrecision()
    var Pi = 3.14159265358979323846
    document.getElementById("Precision").innerHTML = 
    Pi.toPrecision(3);
}

function to_Fixed() {
    let num = 3.14159265358979323846
    let n = num.toFixed(5);
    document.getElementById("Fixed").innerHTML = 
    n;
}

function to_Vom() {
    let text = "Greetings and Salutations";
    let result = text.valueOf();
    document.getElementById("vos").innerHTML = 
    result;
}
   
   

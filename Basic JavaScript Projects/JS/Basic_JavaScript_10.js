function Call_Loop() {
    var Number = "";
    var X = 1;
    while (X < 11) {
        Number += "<br>" + X; 
        X++;
    }
    document.getElementById("Loop").innerHTML = Number;
}

function length_function() {
    var str = "WoodChuck";
    var n = str.length;
    document.getElementById("tally").innerHTML = n;
}

// For Loop Test //
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array Test  Practice //

function cat_Pics() {
    var Cat_Picture = [];  //declares a variable that is an array called Cat_Picture
    Cat_Picture[0] = " sleeping";
    Cat_Picture[1] = " playing";        //These show the array positions //
    Cat_Picture[2] = " eating";
    Cat_Picture[3] = " purring";
    document.getElementById("cat_Array").innerHTML = "This picture shows a cat" + Cat_Picture[3] + ".";

}

function path_Take () {
    var Path = [];
    Path [0] = "Climb the ladder";
    Path [1] = "Slide down the slide";
    Path [2] = "Climb out the window";
    Path [3] = " Dont move!";
    document.getElementById("path_Direction").innerHTML = "You chose to" + Path[3] + ".";

}
//Const practice//
function constant_Function() {
    Musical_Instruments = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instruments.color = "blue";
    Musical_Instruments.price = " $900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instruments.type + " was" + Musical_Instruments.price;
}

function constant_Function2() {
    Ballon_Options = {type:" Ballon", material:"Rubber", color:"Red", Capacity:"o2"};
    Ballon_Options.material = "Nylon";
    Ballon_Options.color = "Black";
    Ballon_Options.Capacity = "Helium";
    document.getElementById("Ballons").innerHTML = "I bought my son a special" + Ballon_Options.type + " it was different because it was made of " + Ballon_Options.material + "!";
}

function constant_Function3() {
    Ballon_Options.material2 = " Plastic";
    Ballon_Options.color2 = " Hot Rod Red";
    document.getElementById("Option2").innerHTML = " My son now has a" + Ballon_Options.type + " that is made of" + Ballon_Options.material2 + " and is " + Ballon_Options.color2 + " !";
}

// Let keyword practice //

var A = 100;   //This declares a Global variable//
document.write(A);
{
    let A = 200;
    document.write("<br>" + A);
}
document.write("<br>" + A);



let PC = {
    Brand: " Alienware",
    Cpu: " I5 3700k",
    Gpu: " Gtx 1070ti",
    description: function() {
        return " My computer is a" + this.Cpu + this.Brand + " with a" + this.Gpu;
    }
}
document.getElementById("my_Computer").innerHTML = PC.description();



var text = "";  
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number is " + i + "<br>";
    document.getElementById("demo").innerHTML = text;
}
document.getElementById("demo").innerHTML = text;

var text = "";
var Z;
for (Z = 2020; Z < 2030; Z++) {
    if (Z === 2029) {break;}
    text += "The number is" + Z + "<br>";
    document.getElementById("z_Break").innerHTML = text;
}
document.getElementById("z_Break").innerHTML = text;

var text = "";
var Z;
for(Z = 2030; Z >= 2015; Z--) {
    if(Z === 2020) {continue;}
    text += "The number is" + Z + "<br>";
    document.getElementById("z_Continue").innerHTML = text;
}
document.getElementById(z_Continue).innerHTML = text;
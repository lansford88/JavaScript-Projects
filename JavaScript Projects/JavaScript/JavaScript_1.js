function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    } 
    document.getElementById("Output").innerHTML = Color_Output;  
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");  //creates variable A, which calls the class (which in this case is the H1 and H3 tags) that has "Click" as the class name. 
    A[1].innerHTML = "This text has changed"; //This basically treats the Class calls like an array, where 0 would be the h1 tag and 1 would be the h3! Then the .innerHTML says were to make a change in that element to the string that is now defined as "This text has changed"

}
// Unfinished thought about a game, but ALL of the classes ended up changeing at the same time, need to implement an if() potentially, not sure yet.//
function myGame() {
    var Z = document.getElementsByClassName("who_ended_them");
    Z[0].innerHTML = "Sasuke is the one who ended up killing Itachi Uchiha";
    Z[1].innerHTML = "Shisui Uchiha was not killed in battle, but took his own life for the greater good!";
    Z[2].innerHTML = " HA! Trick Question, he is still alive in well..if you believe that sort of thing."
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

var grad = document.getElementById("canvas_a");
var ctx = grad.getContext("2d");

var grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0, "Blue");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(1,1,500,500);
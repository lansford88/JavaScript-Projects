//Global Variables//
var N = 75;
function Add_Number_1() {
    document.write(25 + N + "<br>");
}
function Add_Number_2() {
    document.write(N + 100);
}
Add_Number_1();
Add_Number_2();

//Local Variables//
function Add_Num_1() {
    var M = 250;
    document.write( M + 100);
}
function Add_Num_2() {
    document.write( M + 5);
}
Add_Num_1();
Add_Num_2();

// if Statements //

if (1 < 3) {
    document.write("The left number is smaller than the number on the right.");
}
     
function get_Date() {
    if (new Date().getHours()  > 15) {
    document.getElementById("TimeGreet").innerHTML = "Good Evening!";
    }
}
// Practice
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
// Assignment 137 //
function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 60) {
        Result = "You are tall enough!";
    }
    else {
        Result = "Sorry friend, your not tall enough";
    }
    document.getElementById("How_tall_are_you").innerHTML = Result;
}   

function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the Afternoon";
    }
    else {
        Reply = "It is Evening Time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;  
}       

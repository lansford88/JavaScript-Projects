function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Age() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "Right now your to young":"Perfect, your over the age";
    document.getElementById("Result").innerHTML = Can_Vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", " Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik Drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufatured in " + Erik.Vehicle_Year;
}
//STEP 123//
function Home(Year, Level, Color, Lot) {
    this.Home_Year = Year;
    this.Home_Level = Level;
    this.Home_Color = Color;
    this.Home_Lot = Lot;
}

var Bob = new Home(2020, "Two Story", "Pearl White", " Four Acre");
function OwnerDec() {
    document.getElementById("New_and_This").innerHTML = "Bob just bought a" + " " + Bob.Home_Lot + " " +Bob.Home_Color + " " + Bob.Home_Level + " " + "home that was built in " + Bob.Home_Year;
}
//END OF STEP 123//

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
        function Count(){
            var Starting_Point = 15;
            function Plus_one() {
                Starting_Point += 1;
            }
            Plus_one();
            return  Starting_Point;
        }
}





















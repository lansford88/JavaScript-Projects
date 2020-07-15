function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " Universe!");
}

function displayTypes(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is apart of  the " + character.innerHTML + " Clan!!");
}

// Arrow Function Practice //

myFunction = function () {
    return "This is my function";
}

//myFunction - () => "This is my Function"; IS THE SAME THING AS ABOVE //

//var Shinobi;
//Shinobi = (ninja) => "These are my favorite Anime ninjas:" + ninja;
//document.getElementById("").innerHTML = Shinobi("Itachi", "Naruto", "Sasuke");
 

//.some() Practice//

var ages = [2, 10, 18, 20, 13, 15, 30];
//Using the arrow function to pass in a parameter of age//
checkAge = (age) => age >= 18;
document.getElementById("displayAge").innerHTML = ages.some(checkAge);
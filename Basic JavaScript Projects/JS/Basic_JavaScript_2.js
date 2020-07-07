function color_change() { //Declares Variable and then changes the color//
    var str = "Check that out, you changed it to red";
    var change= str.fontcolor("Red");
    document.getElementById("test").innerHTML = change;
}

function function1 () { //Concatenates with the +=//
    var sent = "This is something that should join|";
    sent += " here and then continue on";
    document.getElementById("join").innerHTML = sent;
}
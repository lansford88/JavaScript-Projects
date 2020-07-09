//document.write(typeof 3);
//document.write(typeof true);

function my_Function() {                            
    document.getElementById("Test").innerHTML = 0/0;//Testing NaN on line 12//
}

function my_FunctionCheck() {
    document.getElementById("TestisNaN").innerHTML = isNaN("This is Wording, or a string");
}

function my_FunctionCheck2() {
    document.getElementById("TestisNaN2").innerHTML = isNaN ("747");
}

function not_function() {
    document.getElementById("Not").innerHTML = !(50 > 20);
}

function doublenegative_notfunction() {
    document.getElementById("doublenot").innerHTML = !(50 < 20);
}
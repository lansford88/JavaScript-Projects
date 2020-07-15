function validateForm() {
    var x = document.forms["myForm"]["fname"].value; // Why does the [lname] not window alert if broke?//
    if (x == "") {
        alert("Name must be filled out first, please");
        return false;
    }
}

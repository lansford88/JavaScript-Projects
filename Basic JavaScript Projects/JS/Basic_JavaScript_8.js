function full_Sentence() {
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 = " into a complete";
    var part_4 = " sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function  full_Twister() {
    var part_1 = "How much";
    var part_2 = " wood could a";
    var part_3 = " woodchuck chuck if";
    var part_4 = " a woodchuck could chuck";
    var part_5 = " wood?";
    var whole_Twister = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Twister").innerHTML = whole_Twister;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function papa_Slice() {
    var Sentence = "Best pizza is no doubt is made by Papa John"
    var Section = Sentence.slice(34,43);
    document.getElementById("Papa").innerHTML = Section;
}

function Upper_Function() {
    var str = "Howdy There";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Z = 13566.2013456
    document.getElementById("Precision").innerHTML = Z.toPrecision(10);
}

function teletype_Method() {
    var Y = "Howdy there, this should look like TeleType";
    var result = Y.fixed();
    document.getElementById("TeleType").innerHTML = result;
}

function let_Value() {
    str = "Hello world";
    result = str.valueOf();
    document.getElementById("Values").innerHTML = result;

}
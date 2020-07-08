//Creating my First Dictionary//
function Itachi_Dictionary() {
    var Shinobi = {
        Clan:"Uchiha",
        Sex:"Male",
        Sharingan: "Mangekyou",
        Age: 21,
        Jutsu: "Fireball"
    };
    delete Shinobi.Sex; //will delete the KPV (SEX) from the dictionary//
    document.getElementById("Dictionary").innerHTML = Shinobi.Sex;
}
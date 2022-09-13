var superman = {
name: "superman" ,
power: "flight",
costuneColor: "blue",
strenth: 100000000,
stealth: 0,
intelegent:100
}

var batman = { 
    name: "bataman",
    power: "materal arts",
    costuneColor : "black",
    strenth: 100,
    stealt: 100,
    intelegent:1000
}
// console.log(superman.strenth);
// console.log(batman.strenth)
// console.log(superman.strenth > batman.strenth

var superheroes = (superman, batman);

for (var i=0; i < superheroes.length; i++) {
    var currentHero  = superheroes[i];   //array index bse   
    console.log(currentHero.name);  //funcation call
    console.log(currentHero.costuneColor); 
    //currentHero.costuneCOlour :: object access on key   

    console.log("...........") 
}
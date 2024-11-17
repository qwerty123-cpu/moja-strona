const nameList = ["Radosław", "Mirosław", "Bronisław", "Władysław"];
document.write(nameList + "<br>" + "<br>") //Literał tablicy z podaniem zawartości
const cityList = [];
cityList[0] = 'Kraków';
cityList[1] = 'Warszawa';
document.write(cityList + "<br>" + "<br>") //Literał pustej tablicy z późniejszym uzupełnieniem za pomocą indeksu
const gameItems = new Array();
document.write(gameItems + "<br>" + "<br>") //Konstruktor - pusta tablica
const colors = new Array("red", "blue");
colors[2] = "green"; // dodawanie kolejnego elementu tablicy
document.write(colors + "<br>" + "<br>") //Konstruktor z wypełnieniem elementami
const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
italianUsers.push("Alessandra");
console.log(italianUsers);
document.write(italianUsers + "<br>" + "<br>")//PUSH - dodaj element na końcu tablicy
italianUsers.unshift("Tommaso");
console.log(italianUsers);
document.write(italianUsers + "<br>" + "<br>") //UNSHIFT - dodaj element na początku tablicy
italianUsers.pop();
console.log(italianUsers);
document.write(italianUsers +"<br>" + "<br>") //POP - usuń ostatni element tablicy
italianUsers.shift();
console.log(italianUsers);
document.write(italianUsers + "<br>" + "<br>") //SHIFT - usuń pierwszy element tablicy
const redColors = ["czerwony", "zachodzącego słońca", "krwisty"];
const greenColors = ["zielony", "trawiasty", "zielony banan"];
const redAndGreenColors = redColors.concat(greenColors);
console.log(redAndGreenColors);
document.write(redAndGreenColors + "<br>" + "<br>") //CONCAT - łączenie tablic
const colorsCollections = [...redColors, ...greenColors, "morski"];
console.log(colorsCollections);
document.write(colorsCollections + "<br>" + "<br>") //SPREAD - operator rozwijania (ES6)
const italianUsers1 = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
italianUsers1.splice(italianUsers1.length - 4,1)
document.write(italianUsers1 + "<br>" + "<br>") // usuwanie konkretnego elementu
const italianUsers2 = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"]
italianUsers2.splice(3,0, "pavlo" )
document.write(italianUsers2 + "<br>" + "<br>") //dodawanie w konkretne miejsce
const italianUsers3 = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
document.write(italianUsers3.length + "<br>" + "<br>") //dlugość

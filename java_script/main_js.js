let note_1;                                                                                                              //Definition der Variablen
let note_2;
let note_3;
let note_4;
let note_5;
let ergebnis_notenpunkte;
let summe = 0;
let anzahl_noten = 0;

function notenfelder_auslesen() {
    note_1 = parseInt(document.getElementById("notenfeld_1").value);                                           // Auslesen des Elementes anhand der ID und Umwandlung in eine Zahl
    note_2 = parseInt(document.getElementById("notenfeld_2").value);
    note_3 = parseInt(document.getElementById("notenfeld_3").value);
    note_4 = parseInt(document.getElementById("notenfeld_4").value);
    note_5 = parseInt(document.getElementById("notenfeld_5").value);

    console.log(note_1 + ";" + note_2 + ";" + note_3 + ";" + note_4 + ";" + note_5 + ";")                               //Ausgabe des einzelnen Notenwertes in der Konsole

    punkte_pruefen(note_1)                                                                                              //Überprüfen ob Text oder Nummer
    punkte_pruefen(note_2)
    punkte_pruefen(note_3)
    punkte_pruefen(note_4)
    punkte_pruefen(note_5)

    ergebnis_notenpunkte = summe / anzahl_noten                                                                         //Berechnungsformel der Notenpunkte

    document.getElementById("ausgabe").innerHTML = ergebnis_notenpunkte                                        //Ausgabe der Notenpunkte im index.html

    if(ergebnis_notenpunkte <=5)                                                                                        //Einfärben unter der benannten Bedingung des Elements anhand der ID
    {
        document.getElementById("ausgabe").style.color = "crimson"
    }
    if(ergebnis_notenpunkte >5 && ergebnis_notenpunkte<13)                                                              //Kombination mehrerer Bedingungen durch"&&"
    {
        document.getElementById("ausgabe").style.color = "orange"
    }
    if(ergebnis_notenpunkte >12)
    {
        document.getElementById("ausgabe").style.color = "Green"
    }
    }
function punkte_pruefen (punkte) {                                                                                      //Punkte überprüfen und Ausgabe bei Fehler an die Konsole
    if(isNaN(punkte)) {
        console.log(punkte + "Bitte Zahlen eingeben!")
    }                                                                                                                   //Bedingung wenn keine Nummer im TF steht, wird obiger Text angezeigt
    else{
        summe= summe + punkte;
        anzahl_noten = anzahl_noten + 1;
    }
    if(punkte >15 || punkte<0){                                                                                         //Trennung der Variablen voneinander durch "||"
        console.log(punkte + "Bitte Punkte von 0-15 eintragen!")
    }
    else {
        summe= summe + punkte;
        anzahl_noten = anzahl_noten + 1;
    }
}

                                                                                                                        //Erinnerung_Herr_Fricke_Fehlermeldung_bei_Bedingung_im_Interface_einfügen

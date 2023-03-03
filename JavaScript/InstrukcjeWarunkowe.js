// Instrukcja IF

const a = 5;
if (a > 5) { // czyt. Jeżeli (a >5) to
    console.log("a > 5");
} else if (a == 5) { // czyt. To może chociaż (a ==5). jeśli tak to
    console.log("a = 5");
} else { // czyt. w innym przypadku
    console.log("a < 5");
}

if (a < 5) // bez klamer. jeżeli prawda wówczas wykona tylko jedna najbliższą instrukcje.
    console.log("a < 5"); // to wykona
console.log("Trabant"); // to tez ale juz bez znaczenia czy przyjmie true czy false


//uproszczona, jednolinijkowa instrukcja.
//sprawdz czy a < 5, jesli jest to zeob to, jesli nie to zrob tamto
a < 5 ? console.log("a <5") : console.log("a > 5");

//postac ta moze tez zwrocic wartosc 
const czyAJestMniejsze = a < 5 ? 'a mniejsze' : 'a wieksze' // zwroci stringa w tym przypadku


const tru = true;
if (tru){ // jesli prawda
    console.log("true");
} else  if (!tru){ // jesli falsz
    console.log("false");
}

 // Switch
switch (a) {  // czyt przyjmij a
    case 3: // sprawdź czy jest równe 3
        console.log("3");
        break; // wyjdź ze switcha
    case 5: //sprawdz czy jest równe 5
        console.log("5");
        break; // wyjdź ze switcha
default: // w każdym innym przypadku
        console.log("default");
        break; // przy ostatnim można nie dawać
        }

// W tym przypadku jeżeli a = 3 to zostanie wywołana intrukcja z 3 i 4 (dopoki nie natrafina brake)
//Jeżeli a = 4 to zostanie wywolłane tylko 4 z pominięciem 3. Analogicznie do 5.

switch (a) {
    case 3:
        console.log("3");
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
}

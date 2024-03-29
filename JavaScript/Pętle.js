//Pętle
{
  // While
  {
    //   while (wyrażenie_sprawdzające_zakończenie_pętli) {
    //     ...fragment kodu który będzie powtarzany...
    // }
    let i = 1;
    while (i < 10) {
      // sprawdź czy YY. jesli warunek jest prawdziwy to zrobi znowu. jesli nieprawdziwy to zakonczy petle
      i++;
    }
  }
  // Do while
  {
    do {
      // najpierw zrobi instrukcje, bez spradznia
      i++;
    } while (i > 10); // a dopiero potem sprawdzi. jesli warunek jest prawdziwy to zrobi znowu. jesli nieprawdziwy to zakonczy petle
  }
  // For
  {
    //   for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych) {
    //     kod który zostanie wykonany pewną ilość razy
    // }
    for (let j = 0; j < 10; j++) {
      // przyjmij j. sprawdz czy j<10. jeśl tak to wykonaj XX a potem zrob j++
      console.log(j);
    }
    //Jeżeli nie potrzeba, to możemy pominąć dowolną z trzech składowych pętli.
  }
  // ForEach / For of
  {
    const tab = new Array(1, 2, 3);
    tab.forEach((x, i, t) => console.log(x)); // iteruje po kazdym elemencie tablicy. zwraca x-element, i-idex elementu t-cala tablice

    //innym zapisem literowania po elementach jest for of
    for (const x of tab) {
      //dopisze kazdy element tablicy tab do x i cos z nim zrobi
    }

    //iterowanie po kluczach obiektu
    for (const key in car) {
      if (car.hasOwnProperty(key)) {
        // hasOwnProperty sluzy do upewnoenia sie ze obiekt ma ten klucz
        console.log(key);
      }
    }
  }
  //break
  {
    //Uzywamy gdy wykonamy jakąś czynność chcielibyśmy zakończyć dalsze wykonywanie takiej pętli.
    while (i <= 100) {
      str += i;
      if (str.length > 20) break;
      i++;
    }
  }
  //continue
  {
    //Nie przerywa ona działania pętli, a powoduje przerwanie danej iteracji
    while (i < 100) {
      i++;
      if (i % 2 === 0) continue; //gdy i jest parzyste przerywamy daną iterację i przechodzimy do następnej
      sum += i;
    }
  }
}
//Etykiety
{
  //w sumie to tego sie juz nie uzywa
  //Dane fragmenty kodu mozna etykietowac a potem je wskazywać robi się to poprzez nadamie imienia i dodanie :
  etykieta: {
    console.log("etykieta");
  }

  //Instrukcje skoku

  //continue - przeskakuje do kolejnej iteracji pętli ignorując w obecnej iteracji to co jest pod nim
  for (let i = 0; i < 4; i++) {
    if (i == 2) {
      continue; // nie wypisze 2
    }
    console.log(i);
  }

  //pętle można etykietować i wskazac która pętla ma byc kontynuowana
  pierwsza: for (let i = 0; i < 5; i++) {
    tekst.innerHTML += "i: " + i + "<br>";
    druga: for (let j = 10; j > 0; j--) {
      if (j == 4) {
        continue pierwsza; // jeżeli j == 4 to opusci pętlę druga i wejdzie w kolejna iteracje pierwszej
      }
      tekst.innerHTML += "j: " + j + "<br>";
    }
  }

  //break -- po natknięciu się na niego zamyka cala pętlę na obecnej iteracjii nie wykonuje kolejnych
  for (let i = 0; i < 10; i++) {
    tekst.innerHTML += i + "<br>";
    if (i == 7) {
      break;
    }
  }

  //etykiet mozna uzyc rowniez brzy brake zeby wybrac ktora petla ma sie zakonczyc
  pierwsza: for (let i = 0; i < 5; i++) {
    tekst.innerHTML += "i: " + i + "<br>";
    druga: for (let j = 10; j > 0; j--) {
      if (j == 4) {
        break pierwsza;
      }
      tekst.innerHTML += "j: " + j + "<br>";
    }
  }

  //break  i continue mozna uzywac nie tylko w pętlach a calych etykietach
  etykieta2: {
    alert("pierwszy");
    break etykieta2; // tak na prawde w tym przypadku nie trzeba podawac nazwy bo bez niej zawsze sie dotyczy etykiety/
    // / petli w ktorej jest
    alert("drugi"); // ten juz sie nie wykona
  }
}

//Pętle
{
  // While
  {
    let i = 1;
    while (i < 10) {
      // sprawdź czy YY. Jeśli prawda to zrób XX i znowu sprawdź.
      i++;
    }
  }
  // Do while
  {
    do {
      // Zrób XX
      i++;
    } while (i > 10); // a dopiero potem sprawdź YY. Jeśli prawda to zrob znowu i znowu sprawdź.
  }
  // For
  {
    for (let j = 0; j < 10; j++) {
      // przyjmij j. sprawdz czy j<10. jeśl tak to wykonaj XX a potem zrob j++
      console.log(j);
    }
  }
  // ForEach / For of
  {
    const tab = new Array(1, 2, 3);
    tab.forEach((x) => console.log(x)); // bierze element, wpisuje go w x, potem robi to co po strzlce i bierze kolejny itd.

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
}
//Etykiety
{
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

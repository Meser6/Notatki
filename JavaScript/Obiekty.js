{
  // obiekt to struktura danych skladajaca sie z par kluczy i wartosci
  const objekt = {
    klucz: "wartosc",
    klucz2: 15 - 6, //wartoscia moze byc dowolna rzecz zwracajaca dane
    klucz3: [1, 2, 3],
    klucz4: (value) => value - 9,
    jakasFunkcja(text) {
      // mozemy tez przetrzymywac w niej funckcje
      console.log(`xd ${text}`);
    },
    [`klucz${2 + 2}`]: 12, // klucze mozemy tez zapisywac w [] przez co mozemy wrzucicac do nich dane z innych rzeczy
    //kolejnosc nie ma znaczenia bo i tak zostanie ulozona w kolejnosci alfabetycznej
  };

  objekt.jakasFunkcja("xd"); // do wlasciwosci obiektow odnosimy sie przez kropke
  objekt["klucz"]; // lub poprzez wrzucenie nazwy do []
}
//Tworzenie
{
  //Obiekty można stworzyć na dwa sposoby:
  //bez konstruktora (przydatne jak chcemy szybko stworzyć jeden obiekt i nie tworzyć  podobnych)
  const adam = {
    imie: "Adam",
    wiek: 12,
  };
  //skrocony zapis
  const names = "Szama"; //jesli nazwa zmiennej jest taka sama jak nazwa wartosci to mozemy zastosowac skrocony zapis
  const speed = 1000;
  const dog = {
    names,
    speed,
    showText() {
      return "Lubię walczyć ze złem";
    },
  };

  //z konstruktorem
  function Czlowiek(imie, wiek) {
    //konstruktor nazywamy z duzej litery. nie mozna uzywac strzalkowej bo potrzebujemy this
    this.imie = imie; // tutaj przypisujemy wysylany argument do zmiennej w konstruktorze
    this.wiek = wiek; // słówko this nie jako tworzy nowy parametr do ktorej nastepnie przypisujemy argument
  }

  const bob = new Czlowiek("bob", 12);
  const krystian = new Czlowiek("Krystian"); // gdy nie wypełnimy wszytkich argumentów to obiekt i tak powstanie
  //a puste argumenty przyjmia pustą wartość

  bob instanceof Czlowiek; // sprawdzi czy objekt jest instancja danej klasy/konstruktora
  //new
  {
    //schemat dzialania new:
    //1. tworzy nowy, pusty obiekt
    //2. wywoluje funkcje, ustawia this na ten obiekt
    //3. laczy obiekt z prootypem
    //4. zwraca ten obiekt
  }
}
//this
{
  // this wskasuje na obiekt w ktorym je wywolamy
  const thisObjekt = {
    numner: 15,
    number2: this.numner - 1, // zadziala tak samo jakbysmy napisali thisObjekt.numer
    objekt: this, // w ten sposob zwroci caly objekt
  };
}
//Zarzadzanie właściwościami
{
  //POBIERANIE - aby dostac sie do parametrow danego obiektu nalezy go wywolac i dodac kropke
  bob.imie;
  bob["imie"]; //alternatywny sposob
  bob[nazwa()]; // dowonna ekspresje mozemu tu wrzucic
  bob.nieistnieje; // jak odwolamy sie do nieistniejacej wartosci to dostaniemy undefined

  bob.nieistnieje.nieistnieje2; // rzuci wyjatkiem ponnieważ nieistnije bedzie undefined a ta nie ma wlasciwosci nieistnieje2
  //jesli mamy dane co do ktorych nie mamy pewnosci czy istnieja to mozemy uzyc znaku ?
  bob.nieistnieje?.nieistnieje; // w tym przypadku jesli niestnijeje bedzie undefind (nie edzie istniejc w tym obiekcie) lub bedzie nullem
  //to caly lancuch przyjmnie wartosc undefind i nie rzuci wyjatkiem

  Object.keys(bob); // zwroci tablice z nazwami kluczy danego obiektu
  Object.values(bob); // zwroci tablice z wartosciami danego obiektu,bez kluczy
  Object.entries(bob); // zwroci (kilka) tablice zawierajaca key na 0 index i value na 1
  //DODAWANIE
  bob.nowyKlucz = "to jest nowa wartosc"; // mozemy dodawac do obiektu nowe pary, ale nie mozemy dodac nic bez wartosci
  bob.imie = "beti"; // mozemy tez podmieniac wartosci

  const c = 12; // dopisywanie wlasciwosci ze zmiennej
  const objekt2 = {
    b: 2,
    c, // swtorzy klucz ktory sie bedzie sie nazywal tak samo jak zmienna, a jako jego wlasciwosc wezmie zawartsc zmiennej
  };

  //USUWANIE
  //jesli chcemy usunac jakis klucz i waetosc z obiektu to robimy to przez delete.
  delete bob.imie;

  //funkcje
  {
    //tworzenie metod w obiektach - implementujemu je w ciele obiektu/konstruktrze
    //w przypadku 1 sposobu (ez konstruktora)
    const kuba = {
      imie: "Kuba",
      wiek: 15,
      przedstawSie() {
        // krótsza forma
        return `mam na imie ${this.imie}`; // moze cos zwracac
      },
      podajWiek: function () {
        //dłuzsza forma
        console.log(`mam ${wiek} lat`); // ale nie musi
      },
    };
    kuba.przedstawSie();

    //w przypadku 2 sposobu (z konstruktorem)
    function Pies(imie, rasa) {
      (this.przedstawSie = function () {
        return `mam na imie ${imie} i jestem ${rasa}`;
      }),
        (this.zaszczekaj = function (szczek) {
          // oczywiscie mozna tworzyc metody z argumentami i nic nie zwracajace
          console.log(`${imie} szczeka ${szczek}`);
        });
    }

    const azor = new Pies("azor", "mieszaniec");
    azor.zaszczekaj("how how");
    azor["zaszczekaj"]("how how");
  }
}
// duplikowanie obiektu
{
  //mamy tablicę która chcemy posortować
  const tab = [4, 10, 2, 11, 1.1, 3]; // tabela to tak na prawde obiekt
  const obj = { a: 1 };

  const sortNumbers = function (arr) {
    return arr.sort((a, b) => a - b); // funkcja ta pobierze nam tabele, posortue i przyisze do zmiennej
  }; // z tym ze tak na prawde funkcja ta nie stworzy nam nowej tabeli a dopiszse tylko referenche starej

  const tabSorted = sortNumbers(tab);
  console.log(tabSorted); //[1.1, 2, 3, 4, 10, 11]
  console.log(tab); //[1.1, 2, 3, 4, 10, 11]

  const objNowy = { ...obj }; // abyu skopiowac obiekt mozemy uzyc rest operatora
  const objNOwy2 = Object.assign({}, obj); // albo uzyc metody assign ktora przyjmuje :cel, obiekt kopowany
  //kopioanie takie jest plaskie czyli jesli obiekt w swoim wnetrzu bedzie wskazywal na inny obiekt
  //to wskazanie to bedzie takie same w nowym, kopiowanym obiekcie

  // https://kursjs.pl/kurs/obiekty/obiekty-duplikowanie
}

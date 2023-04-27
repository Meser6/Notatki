//Use script
{
  // use script to funkcja eliminujaca wiele bledow jsa. dodaje sie ja na poczatku kazdego pliku
  // sprawia ona min. ze nie mozna stworzyc zmiennej bez deklaracji let/const/var (przypadkowa literowka)
  // nie pozwala tez stowrzyc funkcji z nazwa zarezerwowana dla przyszlych funkcjonalnosci
  ("use strict");

  //W JS nie ma typowania zmiennych co oznacza ze do zmienniej x mozna wrzucic i pomienic ja na rozne typy.
  //Zmiennie przymuja jednak typu w zaleznosci od zawartosci.
  //Typy dziela sie na to co jest obiektem, i to co nie jest (prymitywne). tych drugich jest 7

  // zmienna deklarujemy przez słówko kluczowe var, a od  ES6 - let i const
  //nie moze sie ona zaczynac od cyfr i miec znaków spęcjalnych (oprocz $ i _)
  //musza byc WYZEJ niz funkcje w ktorych sa wywowylawane bo js czyta od gory do dolu
}
//zasieg kodu
{
  //zmienne/funkcje maja zasieg w obrebie swojego kodu ograniczonego {} i kodu swoich rodzicow
  {
    let jeden; // nie ma dostepu do nioczego
    {
      let dwa; // ma dostep do jednen ale nie ma do dwa
      {
        let trzy; // ma dostep do dwa i jeden
      }
    }
  }
}
//this
{
  //Jeżeli nasz kod uruchamiany jest z najwyższego poziomu (czyli nie umieściliśmy go w żadnej funkcji),
  //domyślnym kontekstem jest obiekt globalny, którym dla przeglądarek jest obiekt window
  //(dla środowiska Node.js jest to obiekt module.exports
  this; // window

  function funkcja() {
    //Jeżeli funkcja nie jest metodą żadnego obiektu, wtedy w jej wnętrzu this będzie
    //wskazywało na obiekt globalny
    this; // window
  }
  // chyba ze uzywamy strict mode, wowczas zwroci undefind

  const object = {
    // chyba ze uzywamy funkcji w obiekcie. wowczas this wkaze na niego
    funkcjaObiektu() {
      this; // object
    },
  };

  //this bedzie podazalo za miejscem w ktorym sie wykonuje
  const objekt = {
    jeden: this, // objekt
    element: document.getElementById("button"),
    funkcja1() {
      this; // objekt
      this.element.addEventListener("click", function () {
        this; // element
      });
    },
  };
  //aby temu zapobiec mozna uzyc chociazby funkcji strzalkowej w ktorej this nie przechodzi
  const objekt2 = {
    jeden: this, // objekt2
    element: document.getElementById("button"),
    funkcja: () => {
      this; // objekt2
      this.element.addEventListener("click", function () {
        this; // objekt2
      });
    },
  };
  // zarzadzenie this poprzez metody
  {
    // funkcja ta sluzy do zarzadzania this. wskazuje mu na jakie miejsce powinien wskazywac
    const objekt1 = {
      name: "objekt1",
      arr: [],
    };

    const obekt2 = {
      name: "objekt2",
      arr: [],
    };

    const printName = function (info, info2) {
      this.arr.push(`name: ${this.name} + ${info} + ${info2}`);
      console.log(this);
    };

    printName("info"); // pod this wrzuci undefind (w strict mode)
    //jesli chcielibysmy wywolac funkcje printName dla w/w obiektow to musimy wskazac na co ma pokazywac this
    //wazne: elementy wskazane przez this musza miec takie same nazwy jak walsciwosci w funkcji

    //call
    {
      printName.call(objekt1, "info", 2); // jako pierwszy parametr wskazujemy na obiekt ktory ma byc wskazany przez this a reszte to parametry funkcji
      printName.call(obekt2, "newInfo", 22); // wywola metode od razu
    }
    //apply
    {
      printName.apply(objekt1, ["info", 22]); // zadziala tak samo ale parametry trzeba przekazac w tablicy. nie zalecane. lepiej call + ...
    }
    //bind
    {
      const objekt1Funkcja = printName.bind(objekt1); //ustawi this, ale nie wywola sie od razu tylko zwroci funkcje z tak ustawionym this
      objekt1Funkcja("info", 23); // potem ta funkcje mozemy wywolywac

      const objekt2FunkcjaZOkreslonymInfo = printName.bind(obekt2, "info2"); //w bind mozemy tez ustawiac od razu parametry
      //przez co funkcja ktora zostanie zwrocona bedzie juz miala czesc wypelniona a my musimy dopisac reszte
      objekt2FunkcjaZOkreslonymInfo(22);
    }
  }
}

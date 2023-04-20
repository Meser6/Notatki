// Klasy
{
  //tworzymy poprzez słowko kuczowe class. Nazywamy je z dużej litery
  class KlasaPierwsza {
    showName() {
      // metody piszemy bez słówka function
      console.log("Klasa pierwsza");
    }
    //let xd = "xd" nie mozemy w nich tworzyc zmiennych
    get int1() {
      // mozemy za to tworzyc gettery ktore mniej wiecej odpowiadaja zmiennym
      return 5;
    }
    get int2() {
      return 10;
    }

    add() {
      // jeśli odnieść sie do jakiejś wartości lub funkcji w klasie to uzywamy this
      return this.int1 + this.int2; // this to odlowanie do obecnej klasy/obiektu.
      // czyli tutaj this.int1 to to samo co KlasaPierwsza.int1
    }
    showResult() {
      console.log("Wynik = " + this.add());
    }
  }

  const klasa1 = new KlasaPierwsza(); // tworzenie instancji klasy
  klasa1.showResult();
}
// Konstruktor
{
  // klasy posiadaja konstruktor domyslny ktory mozna nadpisac (ale bez przeciazenia)
  // konstruktor wywołuje sie przy okazji inicjalizacji klasy
  class KlasaDruga {
    trzciaLiczba = "1"; // klasy maja properisy podobnie ja obiekty
    drugaLiczba = 2; //(propertisy domysle dla danej klsy)

    constructor(int1, int2) {
      // konststruktor tak na prawde odpowiada za nadpisanie istniejacych propertisow
      this.pierwszaLiczba = int1; //zrobi nowy
      this.drugaLiczba = int2; //nadpisze
      console.log("to jest konstruktor"); //  w konstruktorze mozemy dawac tez funkcje ktore sie automatycznie
      //wykonaja same przy tworzeniu instancji klasy
    }
    add() {
      return this.int1 + this.int2;
    }
  }

  const klasa2 = new KlasaDruga(1, 3);
  console.log(klasa2.add());
}
// Dziedziczenie
{
  // klasa rodzic daje swoje metody klasie dziecku itd.
  class KlasaTrzecia {
    add() {
      return 2 + 5;
    }
  }

  class KlasaTrzeciaRozszerzenie extends KlasaTrzecia {
    // klasa rodzic musi byc nad klasa dzieckiem w kodzie
    showResult() {
      console.log(this.add());
    }
  }

  const klasa3 = new KlasaTrzeciaRozszerzenie();
  klasa3.showResult(); // funckcja klasy dziecka
  klasa3.add(); // funkcja klasy rodzica
}
// metody statyczne
{
  //sa to metody ktore nie beda dzialaly dla pojedynczych instancji danej klasy
  // a dla ogolu, jako takie wzorce

  class KlasaCzwarta {
    constructor(trueOrFalse) {
      this.trueOrFalse = trueOrFalse;
    }

    static trueOrFalse() {
      console.log("to jest klasa czwarta");
    }
  }

  const klasa4 = new KlasaCzwarta(true);
  KlasaCzwarta.trueOrFalse();
}

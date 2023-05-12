// OOP - object oriented programing
// sposob na organizacje kodu polegajacy na tworzenoiu obiektow i komunikowaniu ich ze soba

//dziedziczenie w js
{
  // klasy i konstuktor
  {
    //w normalnym jezyku (xd) instancja klasy dziedziczy rzeczy i metody po klasie na podstawie ktorej zostala zbudowana
    //W Javascript każdy obiekt ma prototyp, który jest obiektem sam w sobie. Obiekt prototypu może zawierać właściwości i metody, 
    //które są dziedziczone przez instancje tego obiektu. Można manipulować prototypem, aby zmienić właściwości i metody 
    //dziedziczone przez wszystkie instancje danego obiektu.

    //tworzysz konstruktor z metodami i wlasciwosciami
    function Konstruktor(){}
    //konstruktor ten tworzy prototyp z tymi wlasciwosciami
    Konstruktor.prototype 
    //wartosci te mozna zmienic poprzez dopisanie ich do prototypu
    Konstruktor.prototype.nowaFunkcja = function(){ }
    Konstruktor.prototype.nowaWlasciwosc = 2
    //tworzysz instancje tego konstrultora
    const instancja = new Konstruktor()
    //new dopisuje prototyp do tej instancji wraz z jego funkcjami i wlasciwosciami
    instancja.nowaWlasciwosc // instancja ma dostep do wlasciwosci prtototypu
    instancja.__proto__ //tak on sie nazywa 

    //Podsumowujac: Konstruktor wysyla do prototypu a prototyp wysyla do wszystkich instancj

    Konstruktor.prototype.isPrototypeOf(instancja) // sprawdzi czy instancja ma taki sam prototyp co Konstruktor
    instancja.hasOwnProperty(nowaWlasciwosc) // sprawdzi czy to wlasciwosc instancji czy dostana od prototypu/ zwroci booleana

    //lancuch prototypow
    {
      // prototyp danego konstruktora to tak na prawde obiekt. dziedcziczy on zatem z prototypu Obiektu. 
      //i tak do najstarszego (praprototyp). Prototyp ktory jest najstarszy w hierarchii przyjmie null
      /* schemat:
      Objekt      ->  Obiekt.prototyp 
                            /\
      Konstruktor -> Konstruktor.prototyp (jest to obiekt)
                            /\
                         instancja   
      */
     Object.prototype.wszechWlasnosc = 'wszechwlasnosc' // dopisujac cos do praprototypu obiektu dopiszemy to do kazdego obiektu w js

     const arr = []
     arr.wszechWlasnosc
    }
  }
  //Object.create()
  {
    //w object.create dziala to inaczej (bo czemu by nie?)
  }
}


//obiekt taki mozna stworzyc na 3 sposoby:
{
//konstruktor function
  {
    function Czlowiek(imie, wiek) {
      //funkcje nazywamy z duzej litery. nie mozna uzywac strzalkowej bo potrzebujemy this
      this.imie = imie; // tutaj przypisujemy wysylany argument do zmiennej w konstruktorze
      this.wiek = wiek; // słówko this tworzy nowy parametr do ktorej nastepnie przypisujemy argument

      this.zlaFunkcja = function(){} // NIE DOPISYWAC funkcji do kontstuktora poniewaz zle to wplywa na wydajnosc kodu
      //bo tworzac 100 instancji tworzymy 100 funkcji. lepiej dopisac funkcje do prototypu to stworzy sie raz\
    }

    Czlowiek.prototype.dobraFunkcja = function(){} // tak lepiej tworzyc funkcje
    //js bedzie najpierw szulal tej funcji bezposrednio w obiekcie a jak nie znajdzie to zajrzy do prototypu
  
    const bob = new Czlowiek("bob", 12); // tworzenie instancji 
    const krystian = new Czlowiek("Krystian"); // gdy nie wypełnimy wszytkich argumentów to obiekt i tak powstanie
    //a puste argumenty przyjmia undefind 
  
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
//klasy
  {
    //tworzymy poprzez słowko kuczowe class. Nazywamy je z dużej litery. jest to tak na prawde obudowana wersja z konstruktorem
    class KlasaPierwsza { 
      //let xd = "xd" nie mozemy w nich tworzyc zmiennych
      imie =  'klasa pierwsza'; // ale mozemy tworzyc wlasciwosci
      get int1() {
        // mozemy za to tworzyc gettery ktore mniej wiecej odpowiadaja zmiennym
        return 5;
      }

      showName() {// metody piszemy bez słówka function
        console.log("Klasa pierwsza");
      }
      add() {
        // jeśli odnieść sie do jakiejś wartości lub funkcji w klasie to uzywamy this
        return this.int1; // this to odlowanie do obecnej klasy/obiektu.
        // czyli tutaj this.int1 to to samo co KlasaPierwsza.int1
      }
      showResult() {
        console.log("Wynik = " + this.add());
      }
      #prywatnaFunkcja(){// domyslnie wsyztskit metody w klasach sa publiczne, ale jakbysmy chcieli zrobic prywana
        //czyli taka ktora mozna uzywac tylko w klasie to dodajemy # przed nazwa
        //przed wprowadzeniem prywatnych rzeczy oznaczalo sie je _ na poczatku nazwy 
      }
    }

    const klasa1 = new KlasaPierwsza(); // tworzenie instancji klasy
    klasa1.showResult();
    klasa1.prywatnaFunkcja() // to nie zadziala bo ta funkcja jest prywatna
  }
  // Konstruktor klasy
  {
    // klasy posiadaja konstruktor domyslny ktory mozna nadpisac 
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
    // dziedziczenie klas polega na tym ze klasa rodzic daje swoje metody klasie dziecku itd.
    class KlasaTrzecia {
      constructor(a,b)
      add() {
        return 2 + 5;
      }
    }

    class KlasaTrzeciaRozszerzenie extends KlasaTrzecia { // klasa rodzic musi byc nad klasa dzieckiem w kodzie
      constructor(a,b){
        super(a, b) // aby odwolac sie do elementow rodzica uzywamy super. jesli chcemy przekazac parametry
        //to robimy to od razu w ()
      }
      addRozszerzone(){
        console.log(super.add())// jesli bez parametrow to nie musimy
      }
      add(){ // jesli chcielibysmy nadpisac metote to robimy to bez super. po prostu podajemy ta sama nazwe
        return 3+ 3
      }
      showResult() {
        console.log(this.add());
      }
    }

    const klasa3 = new KlasaTrzeciaRozszerzenie();
    klasa3.showResult(); // funckcja klasy dziecka
    klasa3.add(); // funkcja klasy rodzica ale wywolana na dziecku
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

    KlasaCzwarta.trueOrFalse();
  }
  //Object.create()
  {

  }
}

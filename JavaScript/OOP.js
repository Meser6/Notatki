// OOP - object oriented programing
// sposob na organizacje kodu polegajacy na tworzenoiu obiektow i komunikowaniu ich ze soba
// w sposobie tym wszystoko powinno byc pogrupowane w obiekty

//dziedziczenie w js
{
  // klasy i konstuktor
  {
    //w normalnym jezyku (xd) instancja klasy dziedziczy rzeczy i metody po klasie na podstawie ktorej zostala zbudowana
    //W Javascript każdy obiekt ma prototyp, który jest obiektem sam w sobie. Obiekt prototypu może zawierać właściwości i metody,
    //które są dziedziczone przez instancje tego obiektu. Można manipulować prototypem, aby zmienić właściwości i metody
    //dziedziczone przez wszystkie instancje danego obiektu.

    //tworzysz konstruktor z metodami i wlasciwosciami
    function Konstruktor() {}
    //konstruktor ten tworzy prototyp z tymi wlasciwosciami
    Konstruktor.prototype;
    //wartosci te mozna zmienic poprzez dopisanie ich do prototypu
    Konstruktor.prototype.nowaFunkcja = function () {};
    Konstruktor.prototype.nowaWlasciwosc = 2;
    //tworzysz instancje tego konstrultora
    const instancja = new Konstruktor();
    //new dopisuje prototyp do tej instancji wraz z jego funkcjami i wlasciwosciami
    instancja.nowaWlasciwosc; // instancja ma dostep do wlasciwosci prtototypu
    instancja.__proto__; //tak on sie nazywa

    //Podsumowujac: Konstruktor wysyla do prototypu a prototyp wysyla do wszystkich instancj

    Konstruktor.prototype.isPrototypeOf(instancja); // sprawdzi czy instancja ma taki sam prototyp co Konstruktor
    instancja.hasOwnProperty(nowaWlasciwosc); // sprawdzi czy to wlasciwosc instancji czy dostana od prototypu/ zwroci booleana

    //lancuch prototypow
    {
      // prototyp danego konstruktora to tak na prawde obiekt. dziedcziczy on zatem z prototypu Obiektu.
      //i tak do najstarszego (praprototyp). Prototyp ktory jest najstarszy w hierarchii przyjmie null
      /* schemat:
                           null
                            /\
      Objekt      ->  Obiekt.prototyp 
                            /\
      Konstruktor -> Konstruktor.prototyp (jest to obiekt)
                            /\
                         instancja   
      */
      Object.prototype.wszechWlasnosc = "wszechwlasnosc"; // dopisujac cos do praprototypu obiektu dopiszemy to do kazdego obiektu w js
      // ale nie jest to zalecane a wrecz zabronione :)
      const arr = [];
      arr.wszechWlasnosc;
    }
  }
  //Object.create()
  {
    //w object.create dziala to inaczej. tutaj mozemy wykorzystac obiekt i wskazac go jako prototyp
    //pomija sie w ten sposob konstruktor
    /* schemat:
                           null
                            /\
      Objekt      ->  Obiekt.prototyp 
                            /\
                    wskazany prototyp
                            /\
                         instancja   
      */
  }
}

//new
{
  //slowko kluczowe sluzace do inicjalicazji obiektow z konstruktora
  new Array();
  //schemat dzialania new:
  //1. tworzy nowy, pusty obiekt
  //2. wywoluje funkcje konmstruktora, ustawia this na ten obiekt
  //3. laczy obiekt z prototypem
  //4. zwraca ten obiekt
}
//obiekt mozna stworzyc na 3 sposoby:
{
  //konstruktor function
  {
    function Czlowiek(imie, wiek) {
      //funkcje nazywamy z duzej litery. nie mozna uzywac strzalkowej bo potrzebujemy this
      this.imie = imie; // tutaj przypisujemy wysylany argument do zmiennej w konstruktorze
      this.wiek = wiek; // słówko this tworzy nowy parametr do ktorej nastepnie przypisujemy argument

      this.zlaFunkcja = function () {}; // NIE DOPISYWAC funkcji do kontstuktora poniewaz zle to wplywa na wydajnosc kodu
      //bo tworzac 100 instancji tworzymy 100 funkcji. lepiej dopisac funkcje do prototypu to stworzy sie raz
    }

    Czlowiek.prototype.dobraFunkcja = function () {}; // tak lepiej tworzyc funkcje
    //js bedzie najpierw szulal tej funcji bezposrednio w obiekcie a jak nie znajdzie to zajrzy do prototypu
    //jak nie znajdzie go w pierwszym prototypie to poszuka w w tym wyzej w hierarchii itd

    const bob = new Czlowiek("bob", 12); // tworzenie instancji za pomoca new
    const krystian = new Czlowiek("Krystian"); // gdy nie wypełnimy wszytkich argumentów to obiekt i tak powstanie
    //a puste argumenty przyjmia undefind

    bob instanceof Czlowiek; // sprawdzi czy objekt jest instancja danej klasy/konstruktora

    //funkcje statyczne
    {
      //funkcje statyczne to takei ktore mozna wywolac z poziomu konstruktora ale nie leca one do prototypu
      //przez co nie mozna ich wywolac na instancjach
      Czlowiek.funkcjaStatyczna = function () {
        // w funckcjach konstruktora tworzymy je poprzez dopisanie bezposrednio do konstruktora
        console.log("static");
      };

      Czlowiek.funkcjaStatyczna();
      bob.funkcjaStatyczna(); // to nie zadziala bo jest wywolywane na instamncji
    }
    //Dziedziczenie
    {
      //dziedziczenie pomiedzy klasami polega na przekazywaniu przez prototyp rodzica funkcji i wlasciwosci
      //do prototypu dziecka
      function Rodzic(imieRodzica) {
        this.imieRodzica = imieRodzica;
      }

      Rodzic.prototype.funkcjaRodzica = function () {};

      function Dziecko(imieRodzica, imieDziecka) {
        //dziedziczenie konstruktora rodzica
        //Rodzic(imieRodzica) niemozemy tak zrobic bo to zwykle wywolanie funcji i this wskazuje na undefind
        Rodzic.call(this, imieRodzica); // robimy to za pomoca .call ustawaijac this na nowy obiekt
        this.imieDziecka = imieDziecka;
      }

      //ustawianie prototypu

      //mamy prototyp dziecka i rodzica
      //najpierw kopiujemy i dopisujemy prototyp rodzica do dziecka
      Dziecko.prototype = Object.create(Rodzic.prototype);
      //przy okazji prototypu kopiuje sie tez konstruktor do niego dopisany, musmy wiec go zmienic znowu na dziecko
      Dziecko.prototype.constructor = Dziecko;
      //POTEM dopisujemy rzeczy dziecka do takiego prototypu
      Dziecko.prototype.funkcjaDziecka = function () {};

      // funkcje rodzica mozna nadpisywac poprzez dodanie do dziecka tak samo nazwanej funkcji

      const rodzic = new Rodzic("rodzic");

      rodzic.imieRodzica;
      rodzic.funkcjaRodzica();
      rodzic.imieDziecka; // to nie zadziala bo ma to klasa podrzedna
      rodzic.funkcjaDziecka(); // to tez nie zadziala bo ma to prototyp klasy podrzednej

      const dziecko = new Dziecko("rodzic", "dziecko");

      //wszystko to zadziala bo dziecko ma dostep i do swoich i do rodzica funkcji/wlasciwosci
      dziecko.imieRodzica;
      dziecko.funkcjaRodzica();
      dziecko.imieDziecka;
      dziecko.funkcjaDziecka();
    }
  }
  //klasy
  {
    //klasa to jest to tak na prawde specjalnie obudowana funkcja ktora dziala tak samo jak konstruktor z funkcji
    //nie mozna ich zainicjalizowac przed ich deklaracja
    //nie mozna ich przekazac do funkcji ani zwrocic ich
    //cialo klasy zawsze jest wywolywane w strict mode
    class KlasaPierwsza {
      //tworzymy poprzez słowko kuczowe class. Nazywamy je z dużej litery.

      // --------------------- Konstruktor klasy ---------------------

      // klasy posiadaja konstruktor domyslny ktory mozna nadpisac
      // konstruktor wywołuje sie przy okazji inicjalizacji klasy
      constructor(int1, imie, kolor) {
        this.pierwszaLiczba = int1; //jezeli kalsa nie ma takich wlascowosci to stworzy nowy
        this.imie = imie; //a jesli ma to nadpiszenadpisze
        this._kolor = kolor; // jesli wartosc ta nie jest wartoscia ostateczna i bedzie zaraz modyfinkowana
        //np przez setter lub getter to poszemy przed nia _
        console.log("to jest konstruktor"); //  w konstruktorze mozemy dawac tez funkcje ktore sie automatycznie
        //wykonaja same przy tworzeniu instancji klasy. ostroznie bo zle to wplywa na perfo.
      }

      // Wszystkie parametry i funkcje wpisane w klasie POZA konstruktorem sa tak na prawde dopisywane do prototypu a nie obiektu

      //let xd = "xd" nie mozemy w klasach tworzyc zmiennych
      nazwa = "klasa pierwsza"; // ale mozemy tworzyc wlasciwosci

      //--------------------- gettery i settery ---------------------

      //Getter to specjalna metoda, która zwraca wartość WLASCIWOSC obiektu. Jest używany, gdy chcemy
      //pobrać wartość właściwości, ale również chcemy wykonać jakąś dodatkową logikę w trakcie pobierania
      get imie() {
        return `imie to ${this.imie}`;
      }
      //Settery służą do ustawiania wartości właściwości obiektu. Pozwalają na kontrolę operacji przypisania wartości,
      //np. sprawdzanie poprawności danych lub wykonywanie dodatkowych akcji w trakcie ustawiania wartości.
      //jezeli nazwa setera bedzie miala takie sama nazwe jak to co w konstruktorze to wartosc wyslana tam
      //wywola tego seta (jakby odpalic X._kolor = 50 np.)
      set _kolor(el) {
        if (typeof el === "string") this.kolor = el;
      }
      // przyklad uzycia na dole

      // --------------------- funkcje ---------------------
      showName() {
        // metody piszemy bez słówka function
        console.log("Klasa pierwsza");
      }
      add() {
        // jeśli odnieść sie do jakiejś wartości lub funkcji w klasie to uzywamy this
        return this.int1; // this bedzie przeniesiony na dana instancje
      }
      showResult() {
        console.log("Wynik = " + this.add());
      }
      #prywatnaFunkcja() {
        // domyslnie wsyztskit metody w klasach sa publiczne, ale jakbysmy chcieli zrobic prywana
        //czyli taka ktora mozna uzywac tylko w klasie to dodajemy # przed nazwa
        //przed wprowadzeniem prywatnych rzeczy oznaczalo sie je _ na poczatku nazwy
      }

      //funkcja statyczna
      static funkcjaStatyczna() {
        // w klasach funkcje statyczne tworzymy przez slowko static.
        console.log("static");
      }
    }

    const klasa1 = new KlasaPierwsza(1, "bob"); // tworzenie instancji klasy
    klasa1.showResult();
    klasa1.prywatnaFunkcja(); // to nie zadziala bo ta funkcja jest prywatna
    KlasaPierwsza.funkcjaStatyczna(); // to zadziala
    klasa1.funkcjaStatyczna(); // to nie zadizala bo to funkcaj statyczna i nie moznja jej wywolac na instancji

    // Dziedziczenie
    {
      // w klasach dziedziczenie dziala tak samo jak w konstruktorze funcji z tym, ze jeste schowane za wartwa abstrakcji
      class Rodzic {
        constructor(imieRodzica) {
          this.imieRodzica = imieRodzica;
        }
        funkcjaRodzica() {}
      }

      class Dziecko extends Rodzic {
        // dziedziczymy za pomoca slowka extends
        constructor(imieRodzica, imieDziecka) {
          super(imieRodzica); //a konstruktor rodzica wywolujemy za pomoca Super()
          // super zawsze musi byc wywolywane przed innymi rzeczami bo ustawia this
          //jesli dziecko nie mialoby nowych wlasciwosci to nie musimy pisac konstruktora z samym super bo zrobi to domyslnie
          this.imieDziecka = imieDziecka;
        }

        funkcjaRodzicaRozszerzona() {
          super.funkcjaRodzica(); // jesli chcelibysmy w funkcji w dziecku rozszerzyc funkcje rodzica to robimy ot za pomoca super
        }
      }
    }
  }
  //Object.create()
  {
    //jest to funkcja dzieki ktorej mozemy recznie ustawic prototyp naszego obiektu
    const toJestPrototyp = {
      // najpierw potrzebujemy stoworzyc objekt ktoty potem zostanie prototypem naszego
      funkcja() {
        console.log("funkcja");
      },
      wlascowoscPrototypu: "wlasciwosc",

      init(int, imie) {
        // w ten sposonb mozemy stworzyc cos ala konstruktor aby ustawic wlasciwosci obiektu. this przeskoczy na nowy
        this.int = int;
        this.imie = imie;
      },
    };

    const inicjalizacja = Object.create(toJestPrototyp); // w parametrze ustawiamy obiekt ktory bedzie prototypem
    //funcka zwroci nowy obiekt z ustawionym prototypem i thisem na zwrocony obiekt
    inicjalizacja.init(12, "bob"); // uzycie naszego ala konstruktora
    inicjalizacja.wlascowoscPrototypu;
    inicjalizacja.funkcja();

    //Dziedziczenie
    {
    }
  }
}
//uzycie geta i seta
{
  class Men {
    constructor(imie) {
      // tworzymy konstruktor ktory przyjmuje imie
      this.imie = imie; //tworzymymy wlasciwosc imie
    }

    set imie(imie) {
      // tworzymy seta ktory nazywa sie tak samo jak wlasciwosc ktora chcemy przeronbic
      if (typeof imie === "string") this._imie = imie;
      // robimy cos i dopisujemy do nowo stworzonej walsc _imie
      else {
        console.log("zle imie");
        this._imie = "default";
      }
    }

    get imie() {
      // tworzymy geta ktory stworzy (nadpisze) zmienna imie i dopisze do niej _imie
      return `imie to: ${this._imie}`; // gdybysmy to zrobili od razu setem to by poszedl blad bo i konstruktor
      //i set probowalby dopisac ta wartosc to tej zmiennej
    }
  }

  const men = new Men(23);
  const men2 = new Men("bob");
  console.log(men.imie); // default
  console.log(men2.imie); // bob
}

//Klasy -----------------
{
  //Dopisywanie właściwosci przez konstruktor
  {
    class Klasa1 {
      //jeśli chcemy korzystać z 'starego' sposobu dopisywania wlasciwosciz konstruktora przez this to musimy stworzuc uprzednio
      //kontener na ta wlasciwosc z odpowiednim typem
      pierwsza: number;
      constructor(v1: number) {
        this.pierwsza = v1;
      }
    }
    new Klasa1(1).pierwsza;
    class Klasa2 {
      //Mozemy jednak uprościć ten zapis określając juz w parametrze knstruktora dostepnosc tej wlasciwosci
      //stworzy sie w takim przypadku wlasciwosc ktora nazywa sie tak samo jak parametr
      constructor(
        public pierwsza: number,
        private druga: number,
        readonly trzecia: number
      ) {}
    }
    new Klasa2(1, 2, 3).pierwsza;
    new Klasa2(1, 2, 3).druga; //blad// stworzono prywatna wlasciwosc
  }
  //Opcjonane właściwości/funkcje
  {
    //własciwosci/funkcje moogą byc opcjonalne przez co mozna je ustawić lub nie
    class Klasa {
      v1?: string;
      constructor(v1?: string) {
        if (v1) this.v1 = v1;
      }
    }
    new Klasa(); // brak błędu bo to opcjonalna wartosc. wlasciwosc po prostu nie powstanie
    new Klasa("2");

    //gdybysmy uzyli skróconego zapisu to wlasciwosc taka by istniala i miałaby wwartość undefind
    class Klasa2 {
      constructor(public v1?: string) {}
    }
  }

  //Dostęp do właściwosci/funkcji
  {
    class Klasa3 {
      private druga: number; // prywatna wlasciwosc bedzie widoczna tylko w obrebie tej klasy i nie bedzie mozna go pobrac ani jej zmienic poza
      public trzecia: number; // wlasiwosci defaltowo sa publiczne jesli nie podamy ze sa prywatne. ale mozemy tez pisac od przedrostek public
      readonly czwarta: number = 15; // read only spowoduje ze wartosc bedzie mozna dopisac tylko w konstruktorze i nigdzie poza
      // wartosc taka bedzie mogla byc pobierana poza klasa (o ile nie jest prywatna) ale zadne metody poza/w klasie nie beda mogly jej nadpisac.
      protected piata: number = 15; // protected oznacza, że wlaśiwość bedzie dostępna dla klasy w ktorej jest i dla klas ktore z niej dziedzicza
      //ale nie bedzie dostepna poza nimi

      constructor(v2: number, v3: number) {
        this.druga = v2;
        this.trzecia = v3;
      }

      // public / private / protected moga byc tez funkcje
      private doSomethingInClass() {
        this.czwarta = 4; //blad/ bo jest readonly
      }
    }
    class Klasa31 extends Klasa3 {
      funkcja() {
        this.piata;
      }
    }

    const instancjaKlasy = new Klasa3(2, 3);
    instancjaKlasy.doSomething(15);
    instancjaKlasy.druga; //blad// bo to wlasiwosc prywatna
    instancjaKlasy.doSomethingInClass(); //blad// bo funkcja prywatna
    instancjaKlasy.piata; //blad// bo jest protected
    instancjaKlasy.dziesiata; //blad// bo taka wlasciwosc nie istnieje
  }

  //Abstakcyjne klasy
  {
    //Klasy abstrakcyjne to takie które posiadaja puste szablony właściwosci/funkjci które muszą być zaimplementowane i
    //nadpisane przez klasy ktore z nich dziedziczą. Klasy takie nie moga tworzyc własnej isnstajci
    abstract class Klasa4 {
      abstract wlasciwosc: number;
      abstract funkcja(parametr: string): void; // okreslajac funkcje musimy okreslic jej parametry (lub ich brak) oraz to co ma zwracac

      //oprocz abstakcyjnych wlasciwosci/funkcji klasy takie moga tez miec zwykle. nie moga one jednak wypelniac abstrakcyjnych wartosci
      constructor(public wasciwoscNieabstakcyjna: number) {}
    }

    class Klasa41 extends Klasa4 {
      constructor(public wlasciwosc: number) {
        super(2);
      }
      funkcja() {}
    }
    class Klasa42 extends Klasa4 {} //blad// bo nie ma implementacji wszystkich abstakcyjnych wlasciwosci/funkcji

    new Klasa4(1); //blad// bo to klasa abstrakcyjna. nie moze miec instancji
    new Klasa41(1);
  }

  //Sprawdzanie instancji
  {
    class Klasa1 {
      name: "bob";
    }
    class Klasa2 {
      surname: "boby";
    }

    function funkcja2(v1: Klasa1 | Klasa2) {
      if (v1.name) console.log(v1.name); //blad// bo jak wyslemy cos z Klasy2 to nie bedzie tej wlasciwosci
      //aby tegmu zapobiec trzeba najpierw sprawdzic, czy klasa ktora dostalismy jest instancja Klasy1
      if (v1 instanceof Klasa1) console.log(v1.name);
    }
  }

  //Przeskakiwanie this
  {
    class Klasa5 {
      //mozemy zabezpieczyc this, takby w przypadku przeskakiwania (np przy kopiowaniu fukcji) nie wskazywalo ono na obiekt ktory nie ma
      //wymaganych wlasciwosci. stosujac taki zapis sprawiamy, ze this, nawet jak przeskoczy na inny obiekt to bedzie musial to byc
      //obiekt ktort ma takie same wlasiscosci co klasa
      pierwsza = 1;
      druga?: number; // mozna robic opcjonalne wlsciwosci. nie będzie ona wymagana w tym case

      funkcja(this: Klasa5) {
        console.log(this.pierwsza);
      }
    }

    const funkcjaZKlasy = new Klasa5().funkcja; //dopisujemy funkcje do zmiennej (this wskazuje na instancjaKlasy)
    const kopia1 = { funkcja: funkcjaZKlasy }; //dopisujemy funkcje do innego obiektu (this wskazuje na ten obiekt)
    kopia1.funkcja(); //błąd// bo obiekt nie ma wlasciwosci pierwsza ktore ma klasa Klasa5. druga nie jest wymagana bo jest opcjonalna

    const kopia2 = { pierwsza: 3, funkcja: funkcjaZKlasy }; //to zadziala bo obiekt ma takie same wlasciwosci
    kopia2.funkcja();
  }

  //Singleton
  {
    //Singleton to wrzozec projtkowy ktory polega na tym, że dana klasa ma tylko jedną instancję, a dostęp do niej jest globalny.
    class Klasa6 {
      private static instance: Klasa6; // tworzymy wlasciwosc z ta klasa
      private constructor() {} // ustawiamy konstruktor na jako prywatny
      // i tworzymy funkcje która ja tworzy i zwraca. jesli juz jest sworzona to zwroci ta co jest
      static getInstance() {
        if (this.instance) {
          return this.instance;
        }
        this.instance = new Klasa6();
      }
    }

    const instncja1 = new Klasa6(); //blad// bo konstrktor jest prywatny przez co nie mozemy tworzyc instancji poza klasa
    const instancja2 = Klasa6.getInstance(); // pobierze instancje klasy
    const instancja21 = Klasa6.getInstance(); // bedzie to ta sama instncja co w instancja2
  }
}

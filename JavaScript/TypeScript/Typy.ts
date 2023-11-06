//--------------- Podstawowe typy w TS: -----------------
{
  //string -----------------
  {
    const string1: string = "hej";
    const string3: string = `${string1}`;
  }
  //number -----------------
  {
    const numner1: number = 2;
    const numner2: number = 2.5;
    const numner3: number = NaN;
    const number4: number = 15616 * 15;
  }
  //boolean -----------------
  {
    const boolean1: boolean = true;
    const boolean2: boolean = 2 >= 2;
    const boolean3: boolean = "boolean2" === "hej";
  }
  //array -----------------
  {
    const array1: number[] = [2, 3, 4]; // tzn tablica liczb
    const array2: Array<string> = ["ss", "d"]; // alternatywny zapis
    const array3: { name: string }[] = [{ name: "bob" }, { name: "frank" }]; // tblica obiektow z name
    const array4: (number | string)[] = [1, 'bob', 4, 5] // tablica numerow i stringow

    //Tuples jest to sposob organizacji danych ktory wymusza odpowiednie typy w odpowiednich miejscach w tabeli
    let array5: [number, string] = [1, 'bob'] // taki zapis wymusi 2 elementowa tablice gdzie 0 to number a 1 to string
    array5 = ['bob', 1] // nie beidzemy mogli podmienic wartosci w innej kolejnosci
    array5 = [1, 'bob', 2] // ani dodac wiecej elementow
    array5[2] = '2'

    array5.push('222') // TS nie wylapie pusha! 
  } 
  //object -----------------
  {
    let obcjekt : object = { name: 'bob'} // obekt mozemy zadekladrowac w ten spoosob jednek TS bedzie nam krzyczal o bledzie
    // gdzy bedziemy chciec pobrac wlasciwosci poniewaz zadeklarowalismy dla niego tylko objekt, a nie okreslilismy wnetrza
    obcjekt.name  

    const object1: {
      name: string;
      age: number;
    } = {
      name: "jeden",
      age: 22,
    }; // objekt z zadanymi parametrami. oddzielic ; a nie ,

    //dziala tu rozwniez automatyczne dopisywanie, z tym ze samych typow
    const obcject2 = {
      name: 'jeden',
      age: 22
    } // bedzie mial taki sam typ co objekt1

    obcject2.nieIstniejacaWLasciwosc // TS bedzie nam krzyczal jak bedziemy chcieli sie odwolac do nieistniejacej wlasciwosci
  
    const object2: {
      name: string;
      obiekt: {
        age: number
        arr?: string[]
      };
    } = {
      name: "jeden",
      obiekt: {
        age: 22,
        arr: ["dsa"]
      },
    
  }
  //Enum -----------------
  {
    // enum jest to typ wyliczalny (nazywamy z duzej bo to custom type). 
    // gdy dana zmienna moze przyjac tylko okreslone wartosci to stosujemy wowczas enumy.
    // sklada sie on z klucza i wartosci do niego dopisanej
  
    enum MarkiSaamochodow {
      BMW = "BMW", 
      AUDI = "Audi",  // klucze nazwyamy wielkimi literami
      DACIA = 15,
    }

    function enumy(marka: MarkiSaamochodow){
      console.log(marka);
    };
    enumy(MarkiSaamochodow.AUDI); // wydrukuje wartosc dopisana do tego enuma
    enumy(MarkiSaamochodow["AUDI"]); // zadziala tak samo ale bedziemy mogli wrzucic stringa.
    enumy("AUDI") //rzuci natomiast bledem jak wyslemy wartosc bezposrednio 

    // enumy przyjmują też defaultowe wartosci tj. indexuja sie jak tablice
    enum DefaultoweWartosci {ZERO, JEDEN, DWA} // pod ZERO jest 0, pod jeden 1 etc
    enum DefaultoweWartosci2 {CZTERY = 4, PIEC, SZESC} // mozemy tez podstawic pierwsza wartosci i to od niej zacznie liczyc
    enum DefaultoweWartosci3 {ZERO, JEDNEN, CZTERY = 4, PIEC} // mozemy tez liczyc od dodolnego miejsca. 

    console.log(DefaultoweWartosci.JEDEN) // wydrujuje 1 
  }
  //Interfejs -----------------
  //TODO
  {
      interface wzorObiektu {
        // mozemy stoworzyc interfejs ktoty jest wzornikiem dla obiektow i nadac danemu obiektowi typ tego interfejsu
        name: "bob" | "hans";
        age: number;
        women?: boolean; // wlasciwosc z ? oznacza ze obiekt taka wlasciwosc moze miec, ale nie musi
      }
      const object2: wzorObiektu = {
        name: "bob",
        age: 12,
      };
  }
  //funkcja -----------------
  //TODO
  {
      const zwrociSume = (v1: number, v2: number) => {
        return v1 + v2;
      }; // tworzymy funkcje z parametrami i typem zwracanum
      //gdyby nic nie zwracala to bylaby (v1: number, v2: number) => void
  
      interface funkcjaInterfejs {
        suma: (v1: number, v2: number) => number; // w ten sposob dopisjemy parametrowi suma typ funkcja (ta konktetna)
        int: number;
      }
  
      const funkcja1: funkcjaInterfejs = {
        suma: zwrociSume, // dzieki temu mozemy dopisac tylko odpowiadajaca typowi funkcje
        int: 3,
      };
      funkcja1.suma(5, 15);
  }
  //any -----------------
  {
    let any1; // jak sama nazwa wskazuje moze byc wszystkim. niezalecane uzywanie
    let any2: any = 15; //zmienna any jest wszystikim i mozemy ja wrzucic wszedzie bez bledow
    const funckcjaAny = (v1: string) => {
      return v1;
    };
    funckcjaAny(any2);

    const anyArr: any[] = ['s', 4, false, {}]
  }
  //unkown -----------------
  //TODO
  {
    let unkown1: unknown = zwroci10(); //zalozmy ze zamiast funkcji jakis serwis wysyla cos co nie wiemy czym bedzie
    //gdybysmy uzyli any to taka zmienna moglibysmy wrzucic do funkcji i nie byloby bledu
    const unknown1Funkcja = (v1: number) => {
      console.log(v1);
    };
    unknown1Funkcja(unkown1); // jako ze zmienna jest unknown to nie pozwoli nam wrzucic w miejsce gdzie oczekuje sie czegos

    if (typeof zwroci10() === "number") {
      // w ten sposob mozemy sprawdzic co funkcja zwraca i wywolac odpowiednie metody
      unknown1Funkcja(zwroci10());
    }
  }
  //never -----------------
  //TODO
  {
    // to mechanizm zabezpieczjacy, glownie dla ifow. gdy chcemy miec pelne pokrycie i nigdy nie wywolac bloku else
    type mozliweLiczby = 1 | 2;
    const liczby: mozliweLiczby[] = [1, 2];
    const dupa = (liczby: mozliweLiczby) => {
      if (liczby === 1) {
        console.log("zrob cos");
      } else if (liczby === 2) {
        console.log("zrob cos");
      } else {
        // nigdy nie chcemy zeby ten blok sie wykonal. i tak jest bo poprzednie bloki pokrywaja wszystkie
        // kombinacje tablicy. ale jakby w mozliwychLiczbach i tablicy byla liczba 3 to juz blok else by sie wykonal
        // a TS zorientowalby sie ze do const bedzie cos dopisane i rzucilby bledem
        const never: never = liczby;
        console.log("nie rob nic");
      }
    };
  }
  //Klasy -----------------
  //TODO
  {
    class Klasa {
      // Klasy w TS sa takie jak w JS ale maja wiecej funkcji
      pierwszaLiczba: number; // mozemy tworzyc properties bez dopisania od razu wartosci
      private drugaLiczba: number = 15; // prywatny properties bedzie widoczny tylko w obrebie tej klasy
      // i nie bedzie mozna go pobrac nigdzie indziej. bedzie ona widoczna jak np. wylogujemy instancje klasy
      // ale nie bedzie sie jej dalo pobrac ani podmienic poza klasa
      trzeciaLiczba?: number; // mozna robic opcjonalne propertisy

      readonly czwartaliczba: number; // read only spowoduje ze wartosc bedzie mozna doisac tylko raz i nie bedzie
      //dalo sie jej juz zmienic

      constructor(v1: number, v2: number, v4: number) {
        this.pierwszaLiczba = v1;
        this.drugaLiczba = v2;
        this.czwartaliczba = v4;
      }

      doSomething(pierwszaLiczba: number) {
        console.log(pierwszaLiczba);
      }

      private doSomethingInClass() {
        // prywatne moga byc tez funkcje
        console.log("private");
      }
    }

    const instancjaKlasy = new Klasa(1, 3);
    instancjaKlasy.doSomething(15);
  }
}


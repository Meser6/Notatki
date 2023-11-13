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
    const array4: (number | string)[] = [1, "bob", 4, 5]; // tablica numerow i stringow

    //Tuples jest to sposob organizacji danych ktory wymusza odpowiednie typy w odpowiednich miejscach w tabeli
    let array5: [number, string] = [1, "bob"]; // taki zapis wymusi 2 elementowa tablice gdzie 0 to number a 1 to string
    array5 = ["bob", 1]; //blad// nie beidzemy mogli podmienic wartosci w innej kolejnosci
    array5 = [1, "bob", 2]; //blad// ani dodac wiecej elementow
    array5[2] = "2"; //blad//

    array5.push("222"); // TS nie wylapie pusha!
  }
  //object -----------------
  {
    let objekt: object = { name: "bob" }; // obekt mozemy zadekladrowac w ten spoosob jednek TS bedzie nam krzyczal o bledzie
    // gdzy bedziemy chciec pobrac wlasciwosci poniewaz zadeklarowalismy dla niego tylko objekt, a nie okreslilismy wnetrza
    objekt.name; //blad//

    const object1: {
      name: string;
      age: number;
    } = {
      name: "jeden",
      age: 22,
    }; // objekt z okreslonymi za wczasu parametrami.
    object1.name; // w ten spoboob nie dostaniemy bledu jak na gorze.

    //dziala tu rozwniez automatyczne dopisywanie, z tym ze samych typow
    const obcject2 = {
      name: "jeden",
      age: 22,
    }; // bedzie mial taki sam typ co objekt1

    obcject2.nieIstniejacaWLasciwosc; //blad// TS bedzie nam krzyczal jak bedziemy chcieli sie odwolac do nieistniejacej wlasciwosci

    //jesli chcemy aby jakas wlasciwosc obiektu byla opcjonalna to nalezy dodac ?
    const onject12: { name: string; age?: number } = {
      name: "bob", // nie bedzie rzucac bledem bo age jest opcjonalne tj. moze byc ale nie musi
    };

    //przyklad zlozonego obiektu
    const object2: {
      name: string;
      obiekt: {
        age: number;
        arr?: string[];
      };
    } = {
      name: "jeden",
      obiekt: {
        age: 22,
        arr: ["dsa"],
      },
    };
    //dowolne wlsciwosci
    {
      // jesli nie wiemy jakie dokladnie wlasciwosci ma miec obiekt, ale wiemy, że na pewno będą to np. stringi to stosujemy taki zapis
      interface NieznaneWlasciwosci {
        id: string; // w takich obiektach mozemy tez ustawiac wlasciwosci z nazwami na sztywno ale musza byc one takiego samego typu
        [prop: string]: string; // oznacza: dowolne nazwana wlasciwosc (nazwa jest stringiem) która przyjmuje stringa
      }

      const obj: NieznaneWlasciwosci = {
        id: "2",
        bob: "3",
        boby: "4",
      };
    }
  }

  //Enum -----------------
  {
    // enum jest to typ wyliczalny (nazywamy z duzej bo to custom type).
    // gdy dana zmienna moze przyjac tylko okreslone wartosci to stosujemy wowczas enumy.
    // sklada sie on z klucza i wartosci do niego dopisanej

    enum MarkiSaamochodow {
      BMW = "BMW",
      AUDI = "Audi", // klucze nazwyamy wielkimi literami
      DACIA = 15,
    }

    function enumy(marka: MarkiSaamochodow) {
      console.log(marka);
    }
    enumy(MarkiSaamochodow.AUDI); // wydrukuje wartosc dopisana do tego enuma
    enumy(MarkiSaamochodow["AUDI"]); // zadziala tak samo ale bedziemy mogli wrzucic stringa.
    enumy("AUDI"); //blad// rzuci natomiast bledem jak wyslemy wartosc bezposrednio

    //defaultowe wartosci
    {
      // enumy przyjmują też defaultowe wartosci tj. indexuja sie jak tablice
      enum DefaultoweWartosci {
        ZERO,
        JEDEN,
      } // pod ZERO jest 0, pod jeden 1 etc
      enum DefaultoweWartosci2 {
        CZTERY = 4,
        PIEC,
      } // mozemy tez podstawic pierwsza wartosci i to od niej zacznie liczyc
      enum DefaultoweWartosci3 {
        ZERO,
        JEDNEN,
        CZTERY = 4,
        PIEC,
      } // mozemy tez liczyc od dodolnego miejsca.

      console.log(DefaultoweWartosci.JEDEN); // wydrujuje 1
    }
  }
  //funkcja -----------------
  {
    // tworzac funkcje mozemy okreslic tylko parametry ktore ma przyjac, nie okreslajac tego co ma zwrocic
    // jest to zalecane dzialanie. typow zwracanych powinnysmy uzywac tylko jak mamy ku temu powody
    // w innnym wypadku powinnismy dac TS mozliwosc domyslenai sie co ma byc zwracane
    const funkcja1 = (v1: number, v2: number) => v1 + v2;
    const fnkcja11 = (v1: number, v2: number): number => v1 + v2; // w takim zapisie piszemy typ zwracany po : za parametrami
    const funkcja12: (v1: string) => string = (v1) => `v1: ${v1}`; // mozemy tez okreslic wszystko, input i output (alternatywny zapis)
    const funkcja13: (v1: string) => void = (v1) => console.log(v1); // jesli funkcja ma nic nie zwracac to okreslamy output jako void

    type Funkcja = (v1: number, v2: number) => number; // mozemy oczywiscie zrobic wlasny typ funkcji

    const funkcja2: Funkcja = (v1, v2) => v1 + v2;
    funkcja2(2, 3);
    funkcja2(2); //blad// nie pozwoli nam wyslac mniej argumentow
    funkcja2(2, 3, 4); //blad// nie pozwoli tez wiecej
    funkcja2("2", 3); //blad// zle typy wysylamy

    const funkcja3: Funkcja = (v1) => v1 + 2; // pozwoli zbudowac funkcje z mniejsza iloscia argumentow
    const funkcja4: Funkcja = (v1, v2) => `${v1},${v2}`; //blad// nie pozwoli za to zmienic typu zwracanego
    const funkcja5: Funkcja = (b1, b2) => b1 + b2; // nazwy parametrow NIE musza byc dokladnie takie jak w typie

    //tworzenie funkcji z dowolna liczba argumentow
    {
      function przykladFunkcji3(...val: number[]) {
        console.log(val);
      }
      przykladFunkcji3(1, 2, 3);
      przykladFunkcji3(1);
    }

    // w parametrach funkcji automatycznie przypisanie typow nie zadziala. beda typami any
    function przykladFunkcji2(val1, val2) {
      return `${val2} to ${val1 - 5}`;
    }

    //przeciazanie funkcji
    {
      function funkcja6(v1: number | string) {
        return v1;
      }
      funkcja6("2").length; // błąd bo TS nie wie jaki dokladnie jest typ zwracany (poniewaz zalezy on od teog co wyslemy)
      // aby temu przeciwdzialac moglibysmy dodac as lub skorzystac z przeciazen funkcji

      function funkcja7(v1: number): number;
      function funkcja7(v1: string): string;
      function funkcja7(v1: number | string) {
        return v1;
      }
      funkcja7("2").length; // brak bledu bo TS juz wie, że jak wyslemy number to nam zwroci number etc.
    }
  }
  //any -----------------
  {
    let any1; // jak sama nazwa wskazuje moze byc wszystkim. niezalecane uzywanie
    let any2: any = 15; //zmienna any jest wszystikim i mozemy ja wrzucic wszedzie bez bledow
    const funckcjaAny = (v1: string) => {
      return v1;
    };
    funckcjaAny(any2);

    const anyArr: any[] = ["s", 4, false, {}];
  }
  //unknown -----------------
  {
    function zwroci10() {
      return 10;
    }

    let unknown1: unknown = zwroci10(); //zalozmy ze zamiast funkcji jakis serwis wysyla cos co nie wiemy czym bedzie
    //gdybysmy uzyli any to taka zmienna moglibysmy wrzucic do funkcji i nie byloby bledu
    const unknown1Funkcja = (v1: number) => {
      console.log(v1);
    };
    unknown1Funkcja(unknown1); //blad// jako ze zmienna jest unknown to nie pozwoli nam wrzucic w miejsce gdzie oczekuje sie czegos

    if (typeof zwroci10() === "number") {
      // w ten sposob mozemy sprawdzic co funkcja zwraca i wywolac odpowiednie metody
      unknown1Funkcja(zwroci10());
    }
  }
  //never -----------------
  {
    // to mechanizm zabezpieczjacy, glownie dla ifow. gdy np. chcemy miec pelne pokrycie i nigdy nie wywolac bloku else
    type mozliweLiczby = 1 | 2;
    const liczby: mozliweLiczby[] = [1, 2];
    const never1 = (liczby: mozliweLiczby) => {
      if (liczby === 1) {
      } else if (liczby === 2) {
      } else {
        // nigdy nie chcemy zeby ten blok sie wykonal. i tak jest bo poprzednie bloki pokrywaja wszystkie
        // kombinacje tablicy. ale jakby w mozliwych iczbach i tablicy byla liczba 3 to juz blok else by sie wykonal
        // a TS zorientowalby sie ze do const bedzie cos dopisane i rzucilby bledem
        const never: never = liczby;
      }
    };

    const never2 = (liczby: mozliweLiczby) => {
      if (liczby === 1) {
      } else {
        const never: never = liczby; //blad// rzuci bledem bo jest mozliwe ze const dostnie dopisanie
      }
    };
  }
}

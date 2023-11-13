//Interfejsy -----------------
// Interfejs to swoisty wrzorzec dla obiektów który określa jakie mają mieć właściwości i metody
// Od type rożni go to, że po pierwsze określa on tylko obiekty, a po drugie można go implementowac do klasy określając jej wlasciwosci
// Od abstrakcyjnych klas różni się tym, ze zawiera on tylko i wyłacznie wzór na właściwości/fukcje a klasy abstrakcyjne moga mieć też
// nieabstakcyjna logike którą wysyłaja do klasy dziedziczącej.
// Można rownież implementować wiele interfejsów na raz a nie tylko dziedziczyc z jednej klasy
{
  // Implementacja do obiektu
  interface WzorObiektu {
    name: "bob" | "hans";
    calckAge(age: number): number;
  }
  const objekt1: WzorObiektu = {
    name: "bob",
    surname: "xd", //blad// bo interfejs nie ma tej wlasciwosci
    calckAge: (age: number) => 2022 - age,
  };

  interface WzórKlasy1 {
    name: string; // jeśli właściwości się powtarzają w interfejsach to w klasie która je implementuje wystarczy je wypełnic tylko raz
    funkcja(v1: number): number;
  }
  interface WzórKlasy2 {
    name: string;
    surname: string;
  }
  // implementacja do klasy
  class Klasa1 implements WzórKlasy1, WzórKlasy2 {
    constructor(public name: string, public surname: string) {}

    funkcja(v1: number) {
      return 2022 - v1;
    }

    funkcja2(v2: number) {} // Klasa ofc może mieć też inne właściwości, nie ujete w interfejsach
  }
  // Dziedziczenie
  {
    //interfejsy podobnie jak klasy moga dziedziczyc po sobie. z ta roznica, że jeden interfejs moze dziedziczyc z wielu, a nie z jednego
    interface Interfejs1 {
      name: string;
    }
    interface Interfejs2 extends Interfejs1 {
      surname: string;
    }
    const objekt: Interfejs2 = {
      name: "bob",
      surname: "boby",
    };
  }
  // Opcjonalne wlasciwosci
  {
    //Interfejs moze zawierac opcjonalne właściwosci przez co obiekt który go implementuje moze taka miec ale nie musi
    interface Interfejs {
      name?: string;
    }
    const objekt1: Interfejs = { name: "bob" };
    const objekt2: Interfejs = {};
  }
  // Readonly
  {
    // w interfejsach rowniez wystepuje wlasciwosc readonly. Przez nią dana właściwość będzie można ustawić tylko raz
    interface Wzor {
      readonly bob: string; // wlasciwosc ta przejdzie tez na klase/obiekt
    }

    const objekt2: Wzor = {
      bob: "a",
    };

    objekt2.bob = "c"; //błąd// bo nie mozna zmienić tej właścuiwości
  }
  // Funkcje
  {
    // za pomoca interfejsow można tez określać funkcje (jednak nie jest to zaleceane. Lepiej wybrac type)
    interface Funkcja {
      (v1: number): number;
    }
    const funkcja: Funkcja = (v1: number) => v1++;
  }
}

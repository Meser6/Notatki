//Interfejsy -----------------
// Interfejs to swoisty wrzorzec dla obiektów który określa jakie mają mieć właściwości i metody
// Od type rożni go to, że po popierwsze określa on tylko obiekty, a po drugie można go implementowac do klasy określając jej wlasciwosci
// Od abstrakcyjnych klas różni się tym, ze zawiera on tyljo i wyłacznie wzór na właściwości/fukcje a klasy abstrakcyjne moga mieć też
// nieabstakcyjna logike którą wysyłaja do klasy dziedzyczącej.
// Można rownież implementować wiele interfejsów na raz a nie tylko dziedziczyc z jednej klasy
{
  interface WzorObiektu {
    name: "bob" | "hans";
    calckAge(age: number): number;
    women?: boolean; // wlasciwosc z ? oznacza ze jest to wlaścuwosć/funkcja opcjonalna
  }
  //implementacja do obiektu
  const objekt1: WzorObiektu = {
    name: "bob",
    surname: "xd", // blad
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
}

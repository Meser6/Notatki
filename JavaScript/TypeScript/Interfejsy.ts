//Interfejs -----------------
//wlasne typy nazywamy z duzej litery
//TODO
{
  interface WzorObiektu {
    // mozemy stoworzyc interfejs ktoty jest wzornikiem dla obiektow i nadac danemu obiektowi typ tego interfejsu
    name: "bob" | "hans";
    age: number;
    women?: boolean; // wlasciwosc z ? oznacza ze obiekt taka wlasciwosc moze miec, ale nie musi
  }
  const object2: WzorObiektu = {
    name: "bob",
    age: 12,
  };
}

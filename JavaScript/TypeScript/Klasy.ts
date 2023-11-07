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
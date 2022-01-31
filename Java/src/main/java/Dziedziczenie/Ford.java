package Dziedziczenie;

public class Ford extends Samochod {
    int wersjaZnaczka;

    //Konstruktory 3/3
    /* Z racji, ze w klasie rodzicu konstruktor donmyslny zostal przeciążony i nie występuje w werji bez argumentów
     * to trzeba obsluzyć PRZYNAJMNIEJ jeden z jego konstruktorów*/
    Ford(String rodzajPaliwaWBaku, int wersja, boolean blue) {
        super(rodzajPaliwaWBaku); // super() -  wysyla argumenty do konstruktora klasy wyzej
        super.gwarancja = true; // wysyla coś do wartości z klasy wyżej.
        this.wersjaZnaczka = wersja; // this - odnosi się do klasy, i tylko do niej

        boolean isBlue;
        isBlue = blue; // odnosi sie tylko do metody/konstruktora
    }

    Ford(String rodzajPaliwa, int iloscDrzwi, int wersja) {
        super(rodzajPaliwa, iloscDrzwi); // w zaleznosci co i ile si wysle, to taki konstruktor zostanie wywolany
        this.wersjaZnaczka = wersja;
    }
}

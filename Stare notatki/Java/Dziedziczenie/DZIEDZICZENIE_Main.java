package Dziedziczenie;

public class DZIEDZICZENIE_Main {
    /*
    Dziedziczenie - Wszystkie właściwości które znajdują się w klasie rodzica są też w klasie dziecka

    Dziedziczenie opiera sie na hierarchii klas. Klasa dziecko (szczegółowa) dziedziczy po
    JEDNEJ klasie rodzicu (ogółowa).

    Aby klasa XX dziedczyła z klasy YY w tej drugiej trzeba dopisać -- extends <nazwa_rodzica> --

    Klasa Z która jest dzieckiem klasy X która jest dzieckiem klasy Y dziedziczy z klasy Y
    */

    public static void main(String[] args) {

        Pojazd pojazd = new Pojazd(); // bez wysylania arumentów bo jest tam tylko domyslny ale przciazony

        Samochod samochod = new Samochod("dizel"); // z jednym argumentem bo jeden z 2 konstruktorow ktore
        // tam sa ma taka budowe. nie mozna bez bo nie ma bezargumentowego.

        Ford ford = new Ford("dizel", 12, true); // z trzema bo tylko 3 argumentowe tam sa

        pojazd.odpalNaGazie(true);// ta metoda zaciagnie sie z Pojazd
        samochod.odpalNaGazie(true);// ta metoda zaciagnie sie z Samochód i będzie zmodyfiowana

        boolean czyFordToPojazd = ford instanceof Pojazd; // sprawdza czy obiekt ford jest jest powiazany w dziedziceniu z Pojazd
        // nie mozna w ten sposob sprwdzic polaczen z klasami abstrakcyjnymi
    }
}

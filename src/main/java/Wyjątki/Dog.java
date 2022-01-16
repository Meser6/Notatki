package Wyjątki;

public class Dog{
    String nazwa;

    void nadajImie(String imie) throws ZłeImieException { // po throws wypisujemy wszystkie wyjatki ktore beda osblugiwane w tej metodzie/konstruktorze
        if (imie.length() == 0) {
            throw new ZłeImieException();  // jesli bedize true to rzuca podanym wyjątkiem.
        }
        this.nazwa = imie;
    }
}

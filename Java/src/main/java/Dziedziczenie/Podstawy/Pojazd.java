package Dziedziczenie.Podstawy;

import Dziedziczenie.Interfejsy.TypyMaterialow;

public class Pojazd {

    //Konstruktory 1/3
    Pojazd() { // każda z klas które dziedzicza wywołuje domyslny konsytuktor klasy rodzica.
        // czyli ze ten konstruktor wywoła się automatycznie (na samym poczatku) w każdej podklasie
        // czyt. dalej w Samochód
        System.out.println("bedziesz wisiec");
    }


    //Metody 1/2/

    void odpal() {
        System.out.println("brum brum");
    }

    void odpalNaGazie(boolean gaz) {
        System.out.println("gaz wlaczony");
    }

}

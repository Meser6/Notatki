package Dziedziczenie.Podstawy;

public class Samochod extends Pojazd{
    String paliwo;
    int drzwi;
    boolean gwarancja;

    Samochod(String rodzajPaliwa){ // jeśli klasa nie ma konstruktora domyślego to trzeba wywołać jeden z istniejących w
        // klasach które z niej dziedziczą. czyt. dalej w Ford
        this.paliwo = rodzajPaliwa;
    }
    Samochod (String rodzajPaliwa, int iloscDrzwi){
        this.paliwo = rodzajPaliwa;
        this.drzwi = iloscDrzwi;
    }


}

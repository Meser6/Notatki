package Dziedziczenie.Podstawy;

public class Samochod extends Pojazd {
    String paliwo;
    int drzwi;
    boolean gwarancja;


    //Konstruktory 2/3
    Samochod(String rodzajPaliwa) { // jeśli klasa nie ma konstruktora domyślego to trzeba wywołać jeden z istniejących w
        // klasach które z niej dziedziczą. czyt. dalej w Ford
        this.paliwo = rodzajPaliwa;
    }

    Samochod(String rodzajPaliwa, int iloscDrzwi) {
        this.paliwo = rodzajPaliwa;
        this.drzwi = iloscDrzwi;
    }

    //Metody 2/2
    // przypis @Override informuje, ze metoda ponizej jest nadpisywana na jakąś metode z klasy wyzej

    @Override
    void odpal() {
        super.odpal();
    }

    //Interfejsy

    @Override
    void odpalNaGazie(boolean gaz) {
        super.odpalNaGazie(gaz);
        System.out.println("gaz jest fajny bo tani"); // teraz klasy niższe będa odnoscic się do tej zmodyfinowanej metody
    }

    void odpalNaGazie(boolean gaz, boolean benzyna) {
        super.odpalNaGazie(gaz);
        System.out.println("cos tam");
    } // Jeśli chemy przeciążyć metodę z rodzica to bez @Overide. super wysyla gaz do metody z rodzica, reszta jest stad
}

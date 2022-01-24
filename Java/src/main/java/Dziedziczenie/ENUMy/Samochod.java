package Dziedziczenie.ENUMy;

public class Samochod {

    Marka marka;
    Kolor kolor;

    // Wykorzystując gdzies enum odwołujemy się do jego typu
    Samochod (Marka markaSamochodu, Kolor kolorSamochodu, int liczbaDrzwi){
        this.marka = markaSamochodu;
        this.kolor = kolorSamochodu;
        int drzwi = liczbaDrzwi;
    }
}

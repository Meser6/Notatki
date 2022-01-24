package Dziedziczenie.Interfejsy;

public class INTERFEJSY_Main {
    // Interfejsy działają tak samo jak klasy abstrakcyjne z tą różnicą, że wiele z nich może być zaimplementowane do jednej klasy
    // Interfejsy wymuszaja metody na klasie w ktorej są zaimpementowane. Na ich dzieciach juz nie

    public static void main(String[] args) {
        Samochod samochod = new Samochod();

        samochod.wlaczPrzeciwmgienlne(10);
        samochod.wlaczone(true);

        System.out.println(samochod.material);

        String mat = TypyMaterialow.aluminium; // wywołanie zmienej z interfejsu. Można się tam dostać z kazdego miejsca
    }
}

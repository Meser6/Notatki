package Dziedziczenie.Podstawy;

public interface Interfejsy {
    // Interfejsy działają tak samo jak klasy abstrakcyjne z tą różnicą, że wiele z nich może być zaimplementowane do jednej klasy
    // Interfejsy wymuszaja metody na klasie w ktorej są zaimpementowane. Na ich dzieciach juz nie


    // Metody - stanowią tylko sam szkielet, bez ciała. Zawsze są publiczne i abstrakcyjne
    void jedzDoPrzodu();
    int wartosc(int rocznik, int przebieg, String kolor);

    // Zmienne - zawze są publiczne,  finalne i statyczne przez co nie mogą być zmienane i muszą być wypełnione
    String dzwiek = "Brum brum";
    int iloscKol = 4;

}

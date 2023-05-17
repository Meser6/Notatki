package Wyjątki;

public class ZłeImieException extends Exception { // aby to był traktowany jako wyjatek musi dziedziczyc po klasie Exception

    // Tworzenie własnego wyjątku
    // tworzymy nowa klase która ma obslugiwać ten wyjątek

    @Override
    public String getMessage() { // możemy nadpisywać metody z klasy Exception
        return "podano złe imie";
    }

    // idz do dog
}

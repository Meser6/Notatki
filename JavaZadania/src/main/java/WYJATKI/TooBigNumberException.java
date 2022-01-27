package WYJATKI;

public class TooBigNumberException extends Exception{

    @Override
    public String getMessage() {
        return "Liczba musi być mneijsza od 1001";
    }
}

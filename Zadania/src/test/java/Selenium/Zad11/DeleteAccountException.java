package Selenium.Zad11;

public class DeleteAccountException extends Exception{

    @Override
    public String getMessage() { // możemy nadpisywać metody z klasy Exception
        return "Usunięcie konta przebiegło nieprawidłowo";
    }
}

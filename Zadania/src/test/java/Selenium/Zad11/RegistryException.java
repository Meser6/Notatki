package Selenium.Zad11;

public class RegistryException extends Exception{

    @Override
    public String getMessage() { // możemy nadpisywać metody z klasy Exception
        return "Rejestracja przebiegła nieprawidłowo";
    }

}

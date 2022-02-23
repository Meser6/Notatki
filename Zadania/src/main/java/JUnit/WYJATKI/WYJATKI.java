package JUnit.WYJATKI;

import java.util.InputMismatchException;
import java.util.Scanner;

public class WYJATKI {
    /*
    https://www.samouczekprogramisty.pl/wyjatki-w-jezyku-java/

    Napisz program, który pobierze od użytkownika liczbę (mniejszą od 1001) i wyświetli jej pierwiastek. Do obliczenia
    pierwiastka możesz użyć istniejącej metody java.lang.Math.sqrt(). Jeśli użytkownik poda liczbę ujemną rzuć wyjątek
    java.lang.IllegalArgumentException, jeśli większą niż 1000 rzuć stworzony przez siebie wyjatek
     Obsłuż sytuację, w której użytkownik poda ciąg znaków, który nie jest liczbą.
     Po wszystkim (niezależnie od wprowadzonych danych wyświetl napis "Koniec"
     */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number;

        try {
            number = i(scanner);

            System.out.println(Math.sqrt(number));
        } catch (TooBigNumberException | IllegalArgumentException | InputMismatchException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Koniec");
        }

    }

    static int i(Scanner scanner) throws TooBigNumberException {
        int i = scanner.nextInt();
        if (i > 1000) {
            throw new TooBigNumberException();
        }
        return i;
    }
}

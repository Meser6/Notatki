import java.util.Arrays;

public class Pętle {
    public static void main(String[] args) {

        // While
        int i = 1;

        while (i < 10) { // sprawdź czy YY. Jeśli prawda to zrób XX i znowu sprawdź.
            System.out.println("cos");
            i++;
        }

        // Do while
        do { // Zrób XX
            System.out.println("cos");
            i++;
        } while (i > 10); // a dopiero potem sprawdź YY. Jeśli prawda to zrob znowu i znowu sprawdź.


        // For
        for (int j = 0; j < 10; j++) { // przyjmij j. sprawdz czy j<10. jeśl tak to wykonaj XX a potem zrob j++
            System.out.println("cos");
        }

        // For each
        // służy to literowania po kolekcjach
        int[] p = {1, 2, 3, 4, 5};

        for (int item : p) { // stwórz tymczasowo int item. dopisuj do niego po kolei obiekty z kolekcji p a nasteonie wykonaj XX
            System.out.println(item);
        }
    }

    //dupa
}

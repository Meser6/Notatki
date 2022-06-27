import java.util.Locale;
import java.util.Random;
import java.util.Scanner;

public class Różne {
    public static void main(String[] args) {

        // Random - Losuje dane wartości
        Random random = new Random(); // Najpierw trzeba stworzyć obiekt Random

        int a = random.nextInt(10); // liczby całkowite od 0 do 10 WYŁĄCZNIE
        int b = random.nextInt(); // liczby całkowite od 0 do max int.MAX_VALUE

        double c = random.nextDouble(0.5); // liczby zmiennoprzecinkowe od 0 do 0.5 WYŁĄCZNIE
        double d = random.nextDouble(); // liczby zmiennoprzecinkowe od 0 do 1.0 WYŁĄCZNIE

        // Scanner - Pozwala przypisać wartości z palca, z kolsoli.

        Scanner scanner = new Scanner(System.in); // Najpierw trzeba stworzyć obiekt Random

        int e = scanner.nextInt(); // liczby całkowie
        String f = scanner.toString(); // teksty
        String g = scanner.toString().toLowerCase(); // teksty i zanienia na małe litery
        String h = scanner.toString().toUpperCase(); // teksty i zanienia na duże litery
    }
}

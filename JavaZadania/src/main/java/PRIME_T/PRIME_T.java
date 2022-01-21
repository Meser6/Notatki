package PRIME_T;

import java.util.InputMismatchException;
import java.util.Scanner;

public class PRIME_T {
/*
https://pl.spoj.com/problems/PRIME_T/

    Sprawdź, które spośród danych liczb są liczbami pierwszymi

    Input
    n - liczba testów n<100000, w kolejnych liniach n liczb z przedziału [1..10000]

    Output
    Dla każdej liczby słowo TAK, jeśli liczba ta jest pierwsza, słowo: NIE, w przeciwnym wypadku.
 */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ile liczb chesz sprawdzić?");
        try {
            int quantityOfNumbers = scanner.nextInt();

            for (int i = quantityOfNumbers; i > 0; i--) {
                System.out.println("Podaj liczbę");
                long number = scanner.nextLong();
                boolean isPrime = isPrime(number);

                if (isPrime) {
                    System.out.println("TAK");
                } else {
                    System.out.println("NIE");
                }
            }
        } catch (InputMismatchException e) {
            System.out.println("podano złą liczbę");
        }
    }

    static boolean isPrime(long number) {
        boolean numberIsPrime = false;
        int rest = 0;
        if (number > 1) {
            for (long i = number - 1; i >= 2; i--) {
                boolean restIs0;
                restIs0 = number % i == 0;
                if (restIs0) {
                    rest++;
                }
            }
        }
        if (number > 1 && rest == 0) {
            numberIsPrime = true;
        }
        return numberIsPrime;
    }
}


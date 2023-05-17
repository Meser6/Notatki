package Java.PP0601B;

import java.util.ArrayList;
import java.util.Scanner;

public class PP0601B {
    /*
    https://pl.spoj.com/problems/PP0601B/

Wypisz wszystkie liczby a podzielne przez x i niepodzielne przez y, gdzie 1 < a < n < 100000.

Wejście
Liczby n x y.

Wyjście
Ooddzielone pojedynczym odstępem liczby spełniające warunki zadania wypisane od najmniejszej do największej.
     */
    public static void main(String[] args)  {
        // Scanner
        Scanner scanner = new Scanner(System.in);

        //Input numbers
        int n = 0;
        int x = 0;
        int y = 0;


        // Get n
        try {
            n = n(scanner);
        } catch (TooBigNException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            System.out.println("Wrong input");
        }

        // Get x and y
        try {
            x = scanner.nextInt();
            y = scanner.nextInt();
        } catch (Exception e) {
            System.out.println("Wrong input");
        }

        // List of numbers indivisible by Y, divisible by X and smaller then N
        ArrayList<Integer> checked = indivisibleByYAndDivisibleByX(numbersToCheck(n), x, y);

        //Print output
        for (int i : checked) {
            System.out.print(i + " ");
        }
    }

    // Method to get n
    static int n(Scanner scanner) throws TooBigNException {
        int n = scanner.nextInt();
        if (n < 2 || n > 100000) {
            throw new TooBigNException();
        }
        return n;
    }

    // List for the numbers to check
    static ArrayList<Integer> numbersToCheck(int n) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 2; i < n; i++) {
            list.add(i);
        }
        return list;
    }

    //List to get finale output to 1 test
    static ArrayList<Integer> indivisibleByYAndDivisibleByX(ArrayList<Integer> numbersToCheck, int x, int y) {
        ArrayList<Integer> finaleList = new ArrayList<>();
        for (int numberToCheck : numbersToCheck) {
            if (numberToCheck % x == 0 && numberToCheck % y != 0) {
                finaleList.add(numberToCheck);
            }
        }
        return finaleList;
    }


}


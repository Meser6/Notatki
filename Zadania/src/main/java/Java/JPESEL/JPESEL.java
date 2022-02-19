package Java.JPESEL;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Stack;

public class JPESEL {
    /*
    https://pl.spoj.com/problems/JPESEL/    (zmodyfikowana bo podana tam metoda byla zla)

Jan Kowalski musi wpisać do systemu szpitalnego dane osobowe pacjenta, oprócz imienia i nazwiska musi również wpisać
PESEL pacjenta. Jakież było jego zdziwienie, gdy spostrzegł, że pewnych pacjentów system nie przyjmował z powodu wadliwego PESELu.

Twoim zadaniem jest sprawdzenie, czy podana liczba 11-cyfrowa jest poprawnym PESELem.

Ostatnia cyfra numeru, to tzw. liczba kontrolna, która pozwala obliczyć czy numer PESEL został ustalony prawidłowo. Obliczenia tego dokonuje się według prostego wzoru matematycznego:

1*a + 3*b + 7*c + 9*d + 1*e + 3*f + 7*g + 9*h + 1*i + 3*j, gdzie litery od a do j oznaczają kolejne cyfry numeru PESEL.
Uwaga chodzi o 10 z 11 cyfr numeru. Ostatnia cyfra PESEL będzie wynikiem tego wzoru.

Z otrzymanego wyniku bierze się ostatnią cyfrę i odejmuje się od liczby 10. Tak uzyskany wynik powinien być zgodny z naszą ostatnią cyfra numeru PESEL.

Output
W pojedyńczej linii powinna zostać wyświetlona litera D, jeśli numer PESEL jest poprawny lub N, gdy nie.
     */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int quantity = 0;
        System.out.println("Jak dużo PESELi chcesz sprawdzić?");
        try {
            quantity = scanner.nextInt();
        } catch (Exception e) {
            System.out.println("Podano zła wartość");
        }
        ArrayList<Long> peselList = getPesels(quantity);

        for (int i = 0; i < quantity; i++) {
            long pesel = peselList.get(i);
            String string = String.valueOf(pesel);
            if (string.length() < 11) {
                System.out.println("N");
            } else if (10 - lastNumber(sum10(pesel)) == lastNumber(pesel)) {
                System.out.println("D");
            } else System.out.println("N");
        }
    }

    static ArrayList<Long> getPesels(int quantity) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Long> peselsList = new ArrayList<>();
        for (int i = 0; i < quantity; i++) {
            System.out.print("Podaj PESEL:");
            long pesel = scanner.nextLong();
            peselsList.add(pesel);
        }
        return peselsList;
    }


    static int sum10(long pesel) {
        final int[] multiper = {1, 3, 7, 9, 1, 3, 7, 9, 1, 3};
        int sum = 0;
        int[] numbers = list(pesel);

        for (int i = 0; i < 10; i++) {
            sum += numbers[i] * multiper[i];
        }
        return sum;
    }

    static int lastNumber(int suma) {
        Stack<Integer> list = new Stack<>();
        String peselString = String.valueOf(suma);

        for (int i = 0; i < peselString.length(); i++) {
            char znak = peselString.charAt(i);
            int cyfra = Character.getNumericValue(znak);
            list.push(cyfra);
        }
        return list.lastElement();
    }

    static int lastNumber(long suma) {
        Stack<Integer> list = new Stack<>();
        String peselString = String.valueOf(suma);

        for (int i = 0; i < peselString.length(); i++) {
            char znak = peselString.charAt(i);
            int cyfra = Character.getNumericValue(znak);
            list.push(cyfra);
        }
        return list.lastElement();
    }

    static int[] list(long pesel) {
        int[] list = new int[11];
        String peselString = String.valueOf(pesel);

        for (int i = 0; i < 10; i++) {
            char znak = peselString.charAt(i);
            int cyfra = Character.getNumericValue(znak);
            list[i] = cyfra;
        }
        return list;
    }
}

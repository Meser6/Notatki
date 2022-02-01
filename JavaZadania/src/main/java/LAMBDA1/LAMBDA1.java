package LAMBDA1;

import java.util.ArrayList;
import java.util.Scanner;

public class LAMBDA1 {

    /*
    https://www.samouczekprogramisty.pl/wyrazenia-lambda-w-jezyku-java/

     Napisz program, który pobierze o użytkownika cztery łańcuchy znaków, które umieścisz w liście.
     Następnie posortuj tę listę używając metody List.sort. Użyj wyrażenia lambda, które posortuje
     łańcuchy znaków malejąco po długości.
     */

    public static void main(String[] args) {
        ArrayList<String> list = list();

        list.sort((a, b) -> b.length() - a.length());

        System.out.println(list);

    }

    static ArrayList<String> list() {
        ArrayList<String> returnList = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            returnList.add(getString());
        }
        return returnList;
    }

    static String getString() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("String number " + i + ": ");
        i++;
        return scanner.nextLine();
    }

    static int i = 1;

}

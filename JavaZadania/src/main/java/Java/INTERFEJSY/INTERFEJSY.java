package Java.INTERFEJSY;

import java.util.InputMismatchException;
import java.util.Scanner;

public class INTERFEJSY {
    /*
    https://www.samouczekprogramisty.pl/interfejsy-w-jezyku-java/
     */

    public static void main(String[] args) {
        INTERFEJSY main = new INTERFEJSY();
        Computation computation;

        if (main.shouldMultiply()) {
            computation = new Multiplication();
        } else {
            computation = new Addition();
        }

        double argument1 = main.getArgument();
        double argument2 = main.getArgument();

        double result = computation.compute(argument1, argument2);
        System.out.println("Wynik: " + result);
    }

    private boolean shouldMultiply() {
        System.out.println("What do you want to do? Multiply [M], Addition [A]");
        Scanner scanner = new Scanner(System.in);
        boolean isntCorrect;
        String choice;
        boolean returned = false;
        do {
            choice = scanner.nextLine().toUpperCase();
            switch (choice) {
                case "M" -> {
                    returned = true;
                    isntCorrect = false;
                }
                case "A" -> {
                    returned = false;
                    isntCorrect = false;
                }
                default -> {
                    System.out.println("Wrong input");
                    isntCorrect = true;
                }
            }
        } while (isntCorrect);

        return returned;
    }

    private double getArgument() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Your number: ");
        double returned = 0.0;
        try {
            returned = scanner.nextDouble();
        } catch (InputMismatchException e) {
            System.out.println(e.getMessage());
        }
        return returned;
    }
}

package Wyjątki;

public class WYJĄTKI_Main {


    // jeżeli program napotka na błąd to rzuci wyjątkiem z klasy Exception i wyspie sie. chyba ze go zabezpieczymy
    public static void main(String[] args) {

        try { // sprobuj zrobić XXX. jeśli sie uda to spoko
            int i = 5 / 0;
        } catch (ArithmeticException e) { // jesli podczas kompilacji napotkasz KONKRETNY blad to zrob to i to
            System.out.println(e.getMessage());
        } catch (Exception e) { // jeśli podczas kompilacji napotkasz KAŻDY INNY błąd (niż wczesnejsze) to zrob to i to
            System.out.println(e.getMessage());
        } finally { // bez wzgledu na to czy bedze błąd czy nie to i tak zrob to i to (pisac na dole)
            System.out.println("nie dziel przez 0 lamo");
        }

        // Tworzenie własnego wyjątku
        // aby stworzyć nowy wyjątek który może sie znadrzyc w naszym kodzie tworzymy nowa klse dla niego
        // idz do ZłeImieException

        Dog dog = new Dog();

        try {
            dog.nadajImie("");
        } catch (ZłeImieException e) { // tu juz standardowo lapiemy ten wyjatek jesli trzeba
            System.out.println(e.getMessage()); // a tu bedize nappisana metoda ofc.
        }

    }
}

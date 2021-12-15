public class Operatory {

    public static void main(String[] args) {

        int a = 10, b = 20, c;
        double d;
        boolean x;

        // Proste działania;
        c = a + b;
        c = a - b;
        c = a * b;
        d = (double) a / b; //Warto obdłużyć dzielenie przez 0. Wystarczy rzutowac pierwsza w całym działaniu.

        c = a % b; // Reszta z dzielenia
        d = Math.pow(a, b); // Potęgowanie, a do potęgi b
        d = Math.sqrt(a); // Pierwiastek kwadratowy z a
        d = Math.abs(a); // Wartość bezwględna z a
        d = Math.PI; // Liczba Pi

        a += b; // Dodaj a do b i zapisz to w a
        a++; // Dodaj 1 do a (post)
        ++a; // Dodaj 1 do a (pre)

        // Zamiast rożnych rodzajów nawiasów są tylko zwykłe
        c = ((2 + 2) * 2) - 2;

        x = a >= b; //a jest większe bądź równe b
        x = a == b; //a jest równe b
        x = !false; // ! działa jako negacja tzn. odwrócenie.
        x = 1 == 1 && 2 == 2; // && działa jako i
        x = 1 == 2 || 1 == 3; // || działa jako lub


    }
}

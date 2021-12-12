public class OperatoryArytmetyczne {

    public static void main(String[] args) {

        int a = 10;
        int b = 20;
        int c;
        double d ;

        // Proste działania;
        c = a + b;
        c = a - b;
        c = a * b;
        d = (double)a / b; //Warto obdłużyć dzielenie przez 0. Wystarczy rzutowac pierwsza w całym działaniu.

        c = a % b; // Reszta z dzielenia
        d = Math.pow(a, b); // Potęgowanie, a do potęgi b
        d = Math.sqrt(a); // Pierwiastek kwadratowy z a
        d = Math.abs(a); // Wartość bezwględna z a
        d = Math.PI; // Liczba Pi

        a+=b; // Dodaj a do b i zapisz to w a
        a++; // Dodaj 1 do a (post)
        ++a; // Dodaj 1 do a (pre)

        // Zamiast rożnych rodzajów nawiasów są tylko zwykłe
        c = ((2 +2)*2)-2;

    }
}

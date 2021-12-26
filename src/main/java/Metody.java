public class Metody {

    // Metoda która nic nie zwraca - void
    void print() {
        System.out.println("print");
    }

    // Metoda która coś zwróci - return na końcu
    int szesc() {
        return 3 + 3;
    }

    //Przeciążenie metod - przeciążyć można tylko poprzez wysłanie różnych arumentów
     /* Nie można przeciążyć poprzez zwracany typ np.
            static int a(int a){ return a; }
            static double a(int a) {return a;}
     */
    static void przeciazenie() {
        System.out.println(0);
    }

    static void przeciazenie(int a) {
        System.out.println("a: " + a);
    }

    static void przeciazenie(int a, int b) {
        int c = a + b;
        System.out.println("a + b " + c);
    }

    public static void main(String[] args) {
        przeciazenie();
        przeciazenie(6);
        przeciazenie(3, 4);

    }

    // Wysłanie argumentów do funkcji.

    public static void udawaneMain1(String[] args) {
        int a = 5;
        add1(a);
        System.out.println(a);
    }

    static void add1(int x) {
        x = +10;
    }
    /* Wydrukowane a dalej będzie wynosiło 5 ponieważ do metody add1 wysyłana (kopiowana) jest tylko wartość
    argumentu następnie jest dopisywana do x
     */

    public static void udawaneMain2(String[] args) {
        int[] a = {5};
        add2(a);
        System.out.println(a);
    }

    static void add2(int[] x) {
        x[0] = +10;
    }

    /* Wydrukowane a będzie wynosiło 15 ponieważ (w typach złożonych) wysyłane jest miejsce na dysku (adres)
    gdzie dana wartośc jest zapisana. Więc jeżeli pod ten adres dostarczymy 10 to się ono doda.
     */
}

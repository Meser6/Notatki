public class ZbioryDanych {
    public static void main(String[] args) {

        // Tablice
        //
        char[] a = new char[5]; // z góry trzeba zadeklarować jak długa tablica będzie.
        a[0] = 'p'; // numeracja zaczyna się od 0.
        a[1] = 'd';
        /*niezadeklarowane wartości wypełniają się wartościami domyślnymi:
        int - 0
        String - null
        boolean - false
        char - x0
        double - 0.0D

         */
        char[] b = {'a', 'b', 'c'}; // inny sposób deklaracji

        int bLenght = b.length; // rozmiar tablicy
    }
}

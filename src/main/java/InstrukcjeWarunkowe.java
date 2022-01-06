public class InstrukcjeWarunkowe {
    public static void main(String[] args) {
        int a = 5;

        // Instrukcja IF
        if (a > 5) { // czyt. Jeżeli (a >5) to
            System.out.println("a > 5");
        } else if (a == 5) { // czyt. To może chociaż (a ==5). jeśli tak to
            System.out.println("a = 5");
        } else { // czyt. w innym przypadku
            System.out.println("a < 5");
        }

        if (a < 5) // bez klamer. jeżeli prawda wówczas wykona tylko jedna najbliższą instrukcje.
            System.out.println("a < 5"); // to wykona
        System.out.println("Trabant"); // to już nie


        boolean tru = true;
        if (tru){ // jesli prawda
            System.out.println("true");
        } else  if (!tru){ // jesli falsz
            System.out.println("false");
        }

        // Switch
        switch (a) {  // czyt przyjmij a
            case 3: // sprawdź czy jest równe 3
                System.out.println("a = 3");
                break; // wyjdź ze switcha
            case 5: //sprawdz czy jest równe 5
                System.out.println("a = 5");
                break; // wyjdź ze switcha
            default: // w każdym innym przypadku
                System.out.println("a jest różne d 3 i 5");
                break; // przy ostatnim można nie dawać
        }
        /* W tym przypadku jeżeli a = 3 to zostanie wywołana intrukcja z 3 i 4 (dopoki nie natrafina brake)
        Jeżeli a = 4 to zostanie wywolłane tylko 4 z pominięciem 3. Analogicznie do 5.
         */
        switch (a) {
            case 3:
                System.out.println("3");
            case 4:
                System.out.println("4");
                break;
            case 5:
                System.out.println(5);
                break;
        }

        // Warunkowe przypisanie;
        String b = a > 5 ? "a > 5" : "a < 5";
        // czyt. zmienna b. sprawdz czy a>5. Jest i przypisz XX : Nie jest i przypisz XXX


    }
}

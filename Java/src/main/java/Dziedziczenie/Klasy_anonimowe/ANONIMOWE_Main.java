package Dziedziczenie.Klasy_anonimowe;

public class ANONIMOWE_Main {

    // Klasa anonimowa jest to klasa która nie jest tworzona w odddzielnym pliku a jedynie na podstawie danego, konkretnego obiektu
    // Mamy 30 obiektów które dziedziczą po X. Chcemy zeby wszystkie 30 miało metode X.y(), ale dodatkowo chcemy zeby jeden
    // miał też metotę zzz(). tak zeby tylko on mial do niej dostep. wowczas tworzymy mu klase anonimową
    public static void main(String[] args) {

        Kot kot1 = new Kot();
        kot1.dzwiek(); //Miau miau
        kot1.kolor();//jestem rudy

        Kot kot2 = new Kot() {
            @Override
            void dzwiek() { // nadpisuję tu metotę dzwięk ale tylko dla tej jednego konkretnego obiektu
                super.dzwiek();
                System.out.println("ale też troche biały");
            }
        };

        kot2.dzwiek(); //Miau miau
        kot2.kolor();// jestem rudy ale tez troche bialy

        Kot kot3 = new Kot() {
            //NIE możemy w klasie anonimowej dodać metody której nie ma w klasie podstawowej
            void wyznanie() {
                System.out.println("nie lubie psów");
            }
        };

        kot3.dzwiek(); //Miau miau
        kot3.kolor(); // Jestem rudy
        //kot3.wyznanie(); // to nie zadziała
    }
}

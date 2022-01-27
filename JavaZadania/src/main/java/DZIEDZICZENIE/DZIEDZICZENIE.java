package DZIEDZICZENIE;

public class DZIEDZICZENIE {
    /*
    https://www.samouczekprogramisty.pl/dziedziczenie-w-jezyku-java/

Napisz program, w którym zasymulujesz hierarchię dziedziczenia zwierząt. Stwórz abstrakcyjną klasę Animal,
po której będą dziedziczyły klasy Fish i Mammal. Wszystkie te klasy powinny być abstrakcyjne.
Następnie stwórz konkretne klasy które dziedziczą po Fish i Mammal. Będą to odpowiednio Goldfish i Human.

Nadpisz metodę toString w każdej z tych klas. Stwórz instancje obu tych klas i wyświetl je na konsoli.
     */

    public static void main(String[] args) {
        Human human1 = new Human();
        Goldfish fish1 = new Goldfish();

        System.out.println(human1.toString());
        System.out.println(fish1.toString());
    }
}


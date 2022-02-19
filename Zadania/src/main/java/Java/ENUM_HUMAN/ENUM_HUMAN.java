package Java.ENUM_HUMAN;

public class ENUM_HUMAN {
    /*
    https://www.samouczekprogramisty.pl/typ-wyliczeniowy-w-jezyku-java/

    Napisz klasę Human, która będzie reprezentowała człowieka. Niech klasa ta posiada atrybuty takie jak imię, wiek,
    kolor oczu, kolor włosów. Niech te dwa ostatnie atrybuty będą typami wyliczeniowymi. Stwórz instancję takiej klasy.
     */

    public static void main(String[] args) {
        Human h1 = new Human("Kuba", 26, KolorOczu.PIWNE, KolorWlosow.BLAD);
    }
}

package POROWNANIE;

public class POROWNANIE {
    /*
    https://www.samouczekprogramisty.pl/porownywanie-obiektow-metody-equals-i-hashcode-w-jezyku-java/

    Na koniec krótkie zadanie dla Ciebie. Napisz klasę reprezentującą człowieka, zaimplementuj metody
    hashCode i equals. Zastanów się czy to, że ktoś ma to samo imię i nazwisko sprawia, że jest to
    ta sama osoba? Jaki atrybut może posłużyć do sprawdzenia czy dwie instancje klasy Human
    reprezentują tę samą osobę?
     */

    public static void main(String[] args) {
        Human h1 = new Human("Kuba", "Kaczmarczyk", 95042110237L);
        Human h2 = new Human("Kuba", "Kaczmarczyk", 72031332339L);

        System.out.println(h1.equals(h2));
    }
}

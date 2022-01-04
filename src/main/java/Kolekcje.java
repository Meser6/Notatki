import Zadania.Klasy.Human;

import java.util.ArrayList;

public class Kolekcje {

    public static void main(String[] args) {

        Human h1 = new Human("olek");
        Human h2 = new Human("andrzej");
        Human h3 = new Human("bob");

        //--------------------------------------------------------------------------------------
        //Lista niegeneryczna
        ArrayList list = new ArrayList(); // trzeba importować  przez java.util.Arraylist
        // powyzszy przykład jest typem niegenerycznym tj. mozna wrzucac do niego dowolne obiekty roznego typu
        // tzn. program to skompiluje ale wysypie bledem

        //dodawanie
        list.add(h1);
        list.add(h2);
        list.add(h3);
        //list.add(43213); to sie skompiluje ale wysypie blad

        //rozmiar - w przeciwnienstwie do tablic nie jest zadeklarowany i moze sie zmieniac
        int size = list.size();
        //contains - czy znajduje sie na liscie t/f
        boolean contains = list.contains(h1);
        // usuwanie.
        list.remove(h3);
        //wyczyszczenie listy
        list.clear();
        //iterowanie po obiekcie - jest zawsze posegregowana w kolejnosci dodawania
        for (Object a : list) {
            System.out.println(((Human) a).getName()); // Trzeba wykonac rzutowanie na obiekt ponieważ a jest z klasy,
            //Obiekt a nie Human. trzeba też dać ((a)b).c) to w nawiasach bo najpierw wykonuje sie to po kropce
        }
        // get
        String name = ((Human) list.get(0)).getName(); // taka sama sytuacja co u góry




        //--------------------------------------------------------------------------------------
        //Lista gneryczna
        ArrayList<Human> list2 = new ArrayList();
        // powyzszy przykład jest typem generycznym tj. mozna wrzucac do niego tylko zadeklarowane obiekty

        //dodawanie
        list2.add(h1);
        list2.add(h2);
        list2.add(h3);
        //list2.add(23213); to sie nie skompiluje

        //rozmiar - w przeciwnienstwie do tablic nie jest zadeklarowany i moze sie zmieniac
        int size2 = list.size();
        //contains - czy znajduje sie na liscie t/f
        boolean contains2 = list.contains("booooby");
        // usuwanie.
        list2.remove(h3);
        //wyczyszczenie listy
        list2.clear();
        //iterowanie po obiekcie - jest zawsze posegregowana w kolejnosci dodawania
        for (Human a : list2) {
            System.out.println(a.getName()); // Nie trzeba rzutowac bo mamy pewnosc ze w liscie jest Human
            // a nie Object. Dlatego tez literujemy do Human.
        }
        // get
        String name2 = (list2.get(0)).getName(); // taka sama sytuacja co u góry


    }
}

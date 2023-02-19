package Kolekcje;///import Zadania.Klasy.Human;

import java.util.*;

public class KOLEKCJE_Main {

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

        list.isEmpty(); // sprawdza czy lista jest pusta
        // get
        //String name = ((Human)list.get(0)).getName(); // taka sama sytuacja co u góry
        //TODO rozkminić czemu sie nie kompilukje.


//--------------------------------------------------------------------------------------
        //Lista gneryczna
        ArrayList<Human> arrayList = new ArrayList<>();
        // powyzszy przykład jest typem generycznym tj. mozna wrzucac do niego tylko zadeklarowane obiekty

        //dodawanie
        arrayList.add(h1);
        arrayList.add(h2);
        arrayList.add(h3);
        //arrayList.add(23213); to sie nie skompiluje

        //rozmiar - w przeciwnienstwie do tablic nie jest zadeklarowany i moze sie zmieniac
        int size2 = list.size();
        //contains - czy znajduje sie na liscie t/f
        boolean contains2 = list.contains("booooby");
        // usuwanie.
        arrayList.remove(h3);
        //wyczyszczenie listy
        arrayList.clear();
        //iterowanie po obiekcie - jest zawsze posegregowana w kolejnosci dodawania
        for (Human a : arrayList) {
            System.out.println(a.getName()); // Nie trzeba rzutowac bo mamy pewnosc ze w liscie jest Human
            // a nie Object. Dlatego tez literujemy do Human.
        }
        // get
        arrayList.add(h1);
        String name2 = (arrayList.get(0)).getName(); // taka sama sytuacja co u góry

        List <Human> list2 = Arrays.asList(h1,h2,h3); // stworzenie nowej listy z odrazu zadeklarowanymi obiektami w niej


//--------------------------------------------------------------------------------------
        LinkedList<Human> linkedList = new LinkedList<>();
        // działa tak samo jak ArrayList'a jednak jest ona szybsza gdy mamy duze zbiory danych do obslużenia.


//--------------------------------------------------------------------------------------

        //HashMapa
        // zawiera dwa elementy powiązaneze sobą elementy. 1- Key, 2- Value.Nie mogą być typu prostego.
        HashMap<String, Human> hashMap = new HashMap<>();

        String pierwszy = "Pierwszy człowiek";
        String drugi = "Drugi człowiek";
        //dodawanie
        hashMap.put(pierwszy, h1);
        hashMap.put(drugi, h2);
        hashMap.put("Trzeci człowiek", h3);
        //pobieranie wartości po key.
        String name3 = hashMap.get(drugi).getName();

        // Przy literowaniu w for trzeba sie odnieść czy ma literować po values czy po keys.
        for (Human e : hashMap.values()) {
            System.out.println(e);
        }

        for (String s : hashMap.keySet()) {
            System.out.println(s);
        }
        //reszta jak w liście



//--------------------------------------------------------------------------------------
        //HashSet - działa podobnie jak lista, z tym, że nie zapamiętuje kolejności (zawsze ma losowe)
        HashSet<Human> hashSet = new HashSet<>();

        hashSet.add(h1);
        hashSet.add(h2);
        hashSet.add(h3);

        for (Human i : hashSet){
            System.out.println(i.getName()); // za każdym razem będzie wyświetlała się inna kolejność
        }
        //reszta jak w liście



//--------------------------------------------------------------------------------------
        //LinkedHashSet - działa jak lista, z tym, że nie przyjmuje takich samych obiektów
        LinkedHashSet<Human> linkedHashSet = new LinkedHashSet<>();

        linkedHashSet.add(h1);
        linkedHashSet.add(h2);
        linkedHashSet.add(h3);
        linkedHashSet.add(h1);

        linkedHashSet.size(); // będzie 3 ponieważ nie doda się drugi raz h1
        //reszta jak w liście



//--------------------------------------------------------------------------------------
        // Kolejka - operacje zawsze sa wykonywane na pierwszym obiekcie w kolekcji.

        Queue<Integer> queue = new ArrayDeque<>();

        // gdy coś dodamy w kolejce ląduje na KOŃCU kolejki!!!
        queue.add(1); // w przypadku próby dodania złego obiektu rzuca wyjatkiem
        queue.add(2);
        queue.offer(3); // w przypadku próby dodania obiektu rzuca wartoscia domyslna
        queue.offer(5);

        queue.remove(); // w przypadku próby usuniecia złego obiektu rzuca wyjatkiem. Przy operacji zwraca obiekt
        queue.poll();  // w przypadku próby usuniecia obiektu rzuca wartoscia domyslna. Przy operacji zwraca obiekt

        queue.element(); // gdy nie ma zadnego (lub jest zły) obiektu rzuca wyjatkiem. Przy operacji zwraca obiekt
        queue.peek(); // gdy nie ma zadnego (lub jest zły) obiektu rzuca wartościa domyślną. Przy operacji zwraca obiekt
        // reszta jak w liscie


//--------------------------------------------------------------------------------------
        // Stos- działa podobnie jak koleja z tym, że gdy cos dodajemy to ląduje na POCZĄTKU
        Stack<Integer> stack = new Stack<>();

        stack.push(1);
        stack.push(2);
        stack.push(3); // w przypadku próby dodania obiektu rzuca wartoscia domyslna
        stack.push(4);

        stack.pop(); // w przypadku próby usuniecia obiektu rzuca wartoscia domyslna. Przy operacji zwraca obiekt
        stack.empty(); // sprawdza czy kolekcja jest pusta
        // reszta jak w kolejce/liscie


//--------------------------------------------------------------------------------------
        // Klasa Collections - obsluga kolejkcji.
        /*
        Collections.sort(list); // sortuje od najmniejszej do najwiekszej lub od a do b
        Collections.min(list); // zwraca najmnejsza lub pierwsza alfabetycznie
        Collections.max(list); // zwraca największa lub ostatnią alfaetycznie
        Collections.reverse(list); // odwraca kolejkcje. ostatni to pierwszy i vice versa
        Collections.shuffle(list); // przetasowuje w losowej lokejnosci kolekcje.


         */
    }
}


